import React from 'react';
import { NavBar1 } from '../../devlink/NavBar1';
import { useTheme } from '../SzProvider';

export interface SzNavProps {
  text?: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  theme?: string;
}

export function SzNav({ text, theme, icon, style }: SzNavProps) {
  const { themeDefault } = useTheme();
  return (
    <NavBar1
      theme={theme ? theme : themeDefault}
      text={text}
      icon={icon}
      style={{ style: style }}
    />
  );
}
