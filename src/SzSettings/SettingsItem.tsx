import React from 'react';
import { RowSettings } from '../../devlink/RowSettings';
import { useTheme } from '../SzProvider';

export interface SettingsItemProps {
  title: string;
  style?: React.CSSProperties;
  theme?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  itemClick?: (...args: any[]) => void;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  isLeftIconVisible?: boolean;
}

export function SzSettingsItem({
  title,
  leftIcon,
  style,
  theme,
  itemClick,
  rightIcon,
  onHover,
  leaveHover,
  isLeftIconVisible,
}: SettingsItemProps) {
  const { themeDefault } = useTheme();
  return (
    <RowSettings
      rightIcon={rightIcon}
      text={title}
      visibilityIconLeft={isLeftIconVisible}
      iconSlot={leftIcon}
      settingsItemClick={{
        style: style,
        onClick: itemClick,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
      }}
      theme={theme ? theme : themeDefault}
    />
  );
}
