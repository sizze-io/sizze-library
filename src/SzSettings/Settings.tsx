import React from 'react';
import { SettingsSection } from '../../devlink/SettingsSection';
import { useTheme } from '../SzProvider';

export interface SettingsProps {
  style?: React.CSSProperties;
  theme?: string;
  settingsSlot?: React.ReactNode;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
}

export function SzSettings({
  settingsSlot,
  style,
  theme,
  onHover,
  leaveHover,
  click
}: SettingsProps) {
  const { themeDefault } = useTheme();
  return (
    <SettingsSection
      styleProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
      theme={theme ? theme : themeDefault}
      settingsSlot={settingsSlot}
    />
  );
}
