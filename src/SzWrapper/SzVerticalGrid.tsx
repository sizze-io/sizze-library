import React from 'react';
import { VerticalGrid } from '../../devlink/VerticalGrid';
import { useTheme } from '../SzProvider';

export interface SzVerticalProps {
  style?: React.CSSProperties;
  theme?: string;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
  slot?: React.ReactNode;
}

export function SzVerticalGrid({
  style,
  theme,
  slot,
  onHover,
  leaveHover,
  click,
}: SzVerticalProps) {
  const { themeDefault } = useTheme();
  return (
    <VerticalGrid
      styleProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
      theme={theme ? theme : themeDefault}
      slot={slot}
    />
  );
}
