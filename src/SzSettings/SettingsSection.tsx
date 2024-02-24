import React from 'react';
import { SettingsInsideSection } from '../../devlink/SettingsInsideSection';
import { useTheme } from '../SzProvider';

export interface SettingsSectionProps {
  title: string;
  titleStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  theme?: string;
  slot?: React.ReactNode;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
}

export function SzSettingsSection({
  title,
  titleStyle,
  slot,
  style,
  theme,
  onHover,
  leaveHover,
  click,
}: SettingsSectionProps) {
  const { themeDefault } = useTheme();
  return (
    <SettingsInsideSection
      title={title}
      settingsItemSlot={slot}
      styleProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
      theme={theme ? theme : themeDefault}
      titleSettings={{ style: titleStyle }}
    />
  );
}
