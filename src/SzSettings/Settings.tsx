import React from 'react';
import { SettingsSection } from '../../devlink/SettingsSection';
import { useTheme } from '../SzProvider';

export interface SettingsProps {
  style?: React.CSSProperties;
  theme?: string;
  settingsSlot?: React.ReactNode;
}

export function SzSettings({ settingsSlot, style, theme }: SettingsProps) {
  const { themeDefault } = useTheme();
  return (
    <SettingsSection
      styleProps={{ style: style }}
      theme={theme ? theme : themeDefault}
      settingsSlot={settingsSlot}
    />
  );
}
