import React from 'react';
import { SettingsSection } from '../../devlink/SettingsSection';
import { useTheme } from '../SzProvider';

export interface SettingsProps {
  style?: React.CSSProperties;
  theme?: string;
  settingsSlot?: React.ReactNode;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
}

export function SzSettings({
  settingsSlot,
  style,
  theme,
  onHover,
  leaveHover,
}: SettingsProps) {
  const { themeDefault } = useTheme();
  return (
    <SettingsSection
      styleProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
      }}
      theme={theme ? theme : themeDefault}
      settingsSlot={settingsSlot}
    />
  );
}
