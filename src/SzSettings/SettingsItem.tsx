import React from 'react';
import { RowSettings } from '../../devlink/RowSettings';
import { useTheme } from '../SzProvider';

export interface SettingsItemProps {
  title: string;
  style?: React.CSSProperties;
  theme?: string;
  icon?: React.ReactNode;
  itemClick?: (...args: any[]) => void;
}

export function SzSettingsItem({
  title,
  icon,
  style,
  theme,
  itemClick,
}: SettingsItemProps) {
  const { themeDefault } = useTheme();
  return (
    <RowSettings
      text={title}
      iconSlot={icon}
      settingsItemClick={{ style: style, onClick: itemClick }}
      theme={theme ? theme : themeDefault}
    />
  );
}
