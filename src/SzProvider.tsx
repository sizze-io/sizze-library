import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { verifyLicense } from './lib/checkLicense';

interface ThemeContextType {
  themeDefault: string;
  setThemeDefault: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeDefault, setThemeDefault] = useState<string>('light');

  const value = { themeDefault, setThemeDefault };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const SzProvider = ({
  children,
  themeDefault: initialTheme,
  licenseKey,
}: {
  children: ReactNode;
  themeDefault: string;
  licenseKey: string;
}) => {
  const [themeDefault, setThemeDefault] = useState<string>(initialTheme);
  const [isLicensed, setIsLicensed] = useState<boolean>(true);

  useEffect(() => {
    verifyLicense(licenseKey).then((isValid: boolean) => {
      setIsLicensed(isValid);
      if (!isValid) {
        console.error('Expired');
      }
    });
  }, [licenseKey]);

  if (!isLicensed) {
    return <div>Licence Expired</div>;
  }

  return (
    <ThemeContext.Provider value={{ themeDefault, setThemeDefault }}>
      {children}
    </ThemeContext.Provider>
  );
};
