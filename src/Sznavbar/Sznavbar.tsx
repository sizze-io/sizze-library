import React from 'react';
import { NavBar1 } from '../../devlink/NavBar1';
import { useTheme } from '../SzProvider';

export interface SzNavProps {
  text?: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  theme?: string;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
}

export function SzNav({
  text,
  theme,
  icon,
  style,
  onHover,
  leaveHover,
  click,
}: SzNavProps) {
  const { themeDefault } = useTheme();
  return (
    <NavBar1
      theme={theme ? theme : themeDefault}
      text={text}
      icon={icon}
      style={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
    />
  );
}
