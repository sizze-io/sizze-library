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
import { StarColorIcon } from '../../devlink/StarColorIcon';
import { CloseIcon } from '../../devlink/CloseIcon';
import { useTheme } from '../SzProvider';

export interface IconProps {
  style?: React.CSSProperties;
  theme?: string;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
}

export interface CheckboxProps {
  color?: string;
  theme?: string;
  isActive?: boolean;
  activeColor?: string;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
  style?: React.CSSProperties;
}

export function SzDefaultIcon({
  style,
  theme,
  onHover,
  leaveHover,
  click,
}: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <DefaultIcon
      theme={theme ? theme : themeDefault}
      iconProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
    />
  );
}

export function SzCloseIcon({
  style,
  theme,
  onHover,
  leaveHover,
  click,
}: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <CloseIcon
      theme={theme ? theme : themeDefault}
      iconProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
    />
  );
}

export function SzStarColorIcon({
  style,
  theme,
  onHover,
  leaveHover,
  click,
}: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <StarColorIcon
      theme={theme ? theme : themeDefault}
      styleProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
    />
  );
}

export function SzLeftIcon({
  style,
  theme,
  onHover,
  leaveHover,
  click,
}: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <IconLeft
      theme={theme ? theme : themeDefault}
      iconProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
    />
  );
}

export function SzRightIcon({
  style,
  theme,
  onHover,
  leaveHover,
  click,
}: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <IconRight
      theme={theme ? theme : themeDefault}
      iconProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
    />
  );
}

export function SzStarIcon({
  style,
  theme,
  onHover,
  leaveHover,
  click,
}: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <AlertIcon
      theme={theme ? theme : themeDefault}
      iconProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
    />
  );
}

export function SzPlanetIcon({
  style,
  theme,
  onHover,
  leaveHover,
  click,
}: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <PlanetIcon
      theme={theme ? theme : themeDefault}
      iconProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
    />
  );
}

export function SzAlertIcon({
  style,
  theme,
  onHover,
  leaveHover,
  click,
}: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <AlertIcon
      theme={theme ? theme : themeDefault}
      iconProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
    />
  );
}

export function SzHelpIcon({
  style,
  theme,
  onHover,
  leaveHover,
  click,
}: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <HelpIcon
      theme={theme ? theme : themeDefault}
      iconProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
    />
  );
}

export function SzFeedbackIcon({
  style,
  theme,
  onHover,
  leaveHover,
  click,
}: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <FeedbackIcon
      theme={theme ? theme : themeDefault}
      iconProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
    />
  );
}

export function SzDeleteAccountIcon({
  style,
  theme,
  onHover,
  leaveHover,
  click,
}: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <DeleteAccountIcon
      theme={theme ? theme : themeDefault}
      iconProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
    />
  );
}

export function SzLogoutIcon({
  style,
  theme,
  onHover,
  leaveHover,
  click,
}: IconProps) {
  const { themeDefault } = useTheme();
  return (
    <LogoutIcon
      theme={theme ? theme : themeDefault}
      iconProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
    />
  );
}

export function SzCheckbox({
  color,
  theme,
  isActive,
  activeColor,
  onHover,
  leaveHover,
  click,
  style
}: CheckboxProps) {
  const { themeDefault } = useTheme();
  return (
    <Checkbox
      theme={theme ? theme : themeDefault}
      styleProps={{style: style}}
      iconProps={{
        style: {
          borderColor: color,
          background: isActive ? activeColor : 'transparent',
        },
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
    />
  );
}
