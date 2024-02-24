import React from 'react';
import { TabItem } from '../../devlink/TabItem';
import { useTheme } from '../SzProvider';

export interface SzTabItemProps {
  tabIcon?: React.ReactNode;
  tabText?: string;
  style?: React.CSSProperties;
  сlick?: (...args: any[]) => void;
  theme?: string;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
}

export function SzTabItem({
  tabIcon,
  tabText,
  сlick,
  style,
  theme,
  onHover,
  leaveHover,
}: SzTabItemProps) {
  const { themeDefault } = useTheme();
  return (
    <TabItem
      tabText={tabText}
      tabClick={{
        style: style,
        onClick: сlick,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
      }}
      tabIcon={tabIcon}
      theme={theme ? theme : themeDefault}
    />
  );
}
