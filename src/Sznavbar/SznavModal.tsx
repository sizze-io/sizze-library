import React from 'react';
import { NavModal } from '../../devlink/NavModal';
import { useTheme } from '../SzProvider';

export interface SzNavModalProps {
  title?: string;
  titleStyle?: React.CSSProperties;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  theme?: string;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
  iconClick?: (...args: any[]) => void;
}

export function SzNavModal({
  title,
  titleStyle,
  theme,
  icon,
  style,
  onHover,
  leaveHover,
  click,
  iconClick,
}: SzNavModalProps) {
  const { themeDefault } = useTheme();
  return (
    <NavModal
      theme={theme ? theme : themeDefault}
      title={title}
      titleStyle={{ style: titleStyle }}
      rightIcon={icon}
      iconProps={{ onClick: iconClick }}
      styleProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
    />
  );
}
