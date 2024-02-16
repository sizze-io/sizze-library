import React from 'react';
import { TabItem } from '../../devlink/TabItem';
import { useTheme } from '../SzProvider';

export interface SzTabItemProps {
  tabIcon?: React.ReactNode;
  tabText?: string;
  style?: React.CSSProperties;
  tabClick?: (...args: any[]) => void;
  theme?: string;
}

export function SzTabItem({
  tabIcon,
  tabText,
  tabClick,
  style,
  theme,
}: SzTabItemProps) {
  const { themeDefault } = useTheme();
  return (
    <TabItem
      tabText={tabText}
      tabClick={{ style: style, onClick: tabClick }}
      tabIcon={tabIcon}
      theme={theme ? theme : themeDefault}
    />
  );
}
