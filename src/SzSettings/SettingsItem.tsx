import React from 'react';
import { RowSettings } from '../../devlink/RowSettings';
import { useTheme } from '../SzProvider';

export interface SettingsItemProps {
  title: string;
  style?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  theme?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  itemClick?: (...args: any[]) => void;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  isLeftIconVisible?: boolean;
  subText?: string;
  subTextStyle?: React.CSSProperties;
  subTextVisibility?: boolean;
}

export function SzSettingsItem({
  title,
  titleStyle,
  leftIcon,
  style,
  theme,
  itemClick,
  rightIcon,
  onHover,
  leaveHover,
  isLeftIconVisible,
  subText,
  subTextStyle,
  subTextVisibility,
}: SettingsItemProps) {
  const { themeDefault } = useTheme();
  return (
    <RowSettings
      subTextVisibility={subTextVisibility}
      subText={subText}
      subTextStyle={{ style: subTextStyle }}
      textStyle={{ style: titleStyle}}
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
