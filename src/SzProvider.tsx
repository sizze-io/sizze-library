import React, { createContext, useContext, useState, ReactNode } from 'react';

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
}: {
  children: ReactNode;
  themeDefault: string;
}) => {
  const [themeDefault, setThemeDefault] = useState<string>(initialTheme);

  return (
    <ThemeContext.Provider value={{ themeDefault, setThemeDefault }}>
      {children}
    </ThemeContext.Provider>
  );
};
