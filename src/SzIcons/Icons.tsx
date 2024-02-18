import React from 'react';
import { DefaultIcon } from '../../devlink/DefaultIcon';
import { StarIcon } from '../../devlink/StarIcon';
import { PlanetIcon } from '../../devlink/PlanetIcon';
import { AlertIcon } from '../../devlink/AlertIcon';
import { HelpIcon } from '../../devlink/HelpIcon';
import { FeedbackIcon } from '../../devlink/FeedbackIcon';
import { DeleteAccountIcon } from '../../devlink/DeleteAccountIcon';
import { Checkbox } from '../../devlink/Checkbox';
import { LogoutIcon } from '../../devlink/LogoutIcon';
import { useTheme } from '../SzProvider';

export interface IconProps {
  color?: string;
  theme?: string;
}

export interface CheckboxProps {
  color?: string;
  theme?: string;
  isActive?: boolean;
  activeColor?: string;
}

export function SzDefaultIcon({ color, theme }: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <DefaultIcon
      theme={theme ? theme : themeDefault}
      iconProps={{ style: { color: color } }}
    />
  );
}

export function SzStarIcon({ color, theme }: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <StarIcon
      theme={theme ? theme : themeDefault}
      iconProps={{ style: { color: color } }}
    />
  );
}

export function SzPlanetIcon({ color, theme }: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <PlanetIcon
      theme={theme ? theme : themeDefault}
      iconProps={{ style: { color: color } }}
    />
  );
}

export function SzAlertIcon({ color, theme }: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <AlertIcon
      theme={theme ? theme : themeDefault}
      iconProps={{ style: { color: color } }}
    />
  );
}

export function SzHelpIcon({ color, theme }: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <HelpIcon
      theme={theme ? theme : themeDefault}
      iconProps={{ style: { color: color } }}
    />
  );
}

export function SzFeedbackIcon({ color, theme }: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <FeedbackIcon
      theme={theme ? theme : themeDefault}
      iconProps={{ style: { color: color } }}
    />
  );
}

export function SzDeleteAccountIcon({ color, theme }: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <DeleteAccountIcon
      theme={theme ? theme : themeDefault}
      iconProps={{ style: { color: color } }}
    />
  );
}

export function SzLogoutIcon({ color, theme }: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <LogoutIcon
      theme={theme ? theme : themeDefault}
      iconProps={{ style: { color: color } }}
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
