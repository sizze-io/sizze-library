import React from 'react';
import { TabBar1 } from '../../devlink/TabBar1';
import { useTheme } from '../SzProvider';

export interface SzTabBarProps {
  slot?: React.ReactNode;
  style?: React.CSSProperties;
  theme?: string;
}

export function SzTabBar({ slot, style, theme }: SzTabBarProps) {
  const { themeDefault } = useTheme();
  return (
    <TabBar1
      tabSlot={slot}
      style={{ style: style }}
      theme={theme ? theme : themeDefault}
    />
  );
}
