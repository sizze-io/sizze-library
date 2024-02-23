import React from 'react';
import { DefaultIcon } from '../../devlink/DefaultIcon';
import { PlanetIcon } from '../../devlink/PlanetIcon';
import { AlertIcon } from '../../devlink/AlertIcon';
import { HelpIcon } from '../../devlink/HelpIcon';
import { FeedbackIcon } from '../../devlink/FeedbackIcon';
import { DeleteAccountIcon } from '../../devlink/DeleteAccountIcon';
import { Checkbox } from '../../devlink/Checkbox';
import { LogoutIcon } from '../../devlink/LogoutIcon';
import { IconLeft } from '../../devlink/IconLeft';
import { IconRight } from '../../devlink/IconRight';
import { useTheme } from '../SzProvider';

export interface IconProps {
  style?: React.CSSProperties;
  theme?: string;
}

export interface CheckboxProps {
  color?: string;
  theme?: string;
  isActive?: boolean;
  activeColor?: string;
}

export function SzDefaultIcon({ style, theme }: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <DefaultIcon
      theme={theme ? theme : themeDefault}
      iconProps={{ style: style }}
    />
  );
}

export function SzLeftIcon({ style, theme }: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <IconLeft
      theme={theme ? theme : themeDefault}
      iconProps={{ style: style }}
    />
  );
}

export function SzRightIcon({ style, theme }: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <IconRight
      theme={theme ? theme : themeDefault}
      iconProps={{ style: style }}
    />
  );
}

export function SzStarIcon({ style, theme }: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <AlertIcon
      theme={theme ? theme : themeDefault}
      iconProps={{ style: style }}
    />
  );
}

export function SzPlanetIcon({ style, theme }: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <PlanetIcon
      theme={theme ? theme : themeDefault}
      iconProps={{ style: style }}
    />
  );
}

export function SzAlertIcon({ style, theme }: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <AlertIcon
      theme={theme ? theme : themeDefault}
      iconProps={{ style: style }}
    />
  );
}

export function SzHelpIcon({ style, theme }: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <HelpIcon
      theme={theme ? theme : themeDefault}
      iconProps={{ style: style }}
    />
  );
}

export function SzFeedbackIcon({ style, theme }: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <FeedbackIcon
      theme={theme ? theme : themeDefault}
      iconProps={{ style: style }}
    />
  );
}

export function SzDeleteAccountIcon({ style , theme }: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <DeleteAccountIcon
      theme={theme ? theme : themeDefault}
      iconProps={{ style: style  }}
    />
  );
}

export function SzLogoutIcon({ style , theme }: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <LogoutIcon
      theme={theme ? theme : themeDefault}
      iconProps={{ style: style  }}
    />
  );
}

export function SzCheckbox({
  color,
  theme,
  isActive,
  activeColor,
}: CheckboxProps) {
  const { themeDefault } = useTheme();
  return (
    <Checkbox
      theme={theme ? theme : themeDefault}
      iconProps={{
        style: {
          borderColor: color,
          background: isActive ? activeColor : 'transparent',
        },
      }}
    />
  );
}
