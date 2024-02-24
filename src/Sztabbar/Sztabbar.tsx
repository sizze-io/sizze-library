import React from 'react';
import { TabBar1 } from '../../devlink/TabBar1';
import { useTheme } from '../SzProvider';

export interface SzTabBarProps {
  slot?: React.ReactNode;
  style?: React.CSSProperties;
  theme?: string;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
}

export function SzTabBar({
  slot,
  style,
  theme,
  onHover,
  leaveHover,
  click,
}: SzTabBarProps) {
  const { themeDefault } = useTheme();
  return (
    <TabBar1
      tabSlot={slot}
      style={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
      theme={theme ? theme : themeDefault}
    />
  );
}
