import React from 'react';
import { SettingsInsideSection } from '../../devlink/SettingsInsideSection';
import { useTheme } from '../SzProvider';

export interface SettingsSectionProps {
  title: string;
  titleStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  theme?: string;
  slot?: React.ReactNode;
}

export function SzSettingsSection({
  title,
  titleStyle,
  slot,
  style,
  theme,
}: SettingsSectionProps) {
  const { themeDefault } = useTheme();
  return (
    <SettingsInsideSection
      title={title}
      settingsItemSlot={slot}
      styleProps={{ style: style }}
      theme={theme ? theme : themeDefault}
      titleSettings={{ style: titleStyle }}
    />
  );
}
