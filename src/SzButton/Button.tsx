import React from 'react';
import { ButtonPrimary } from '../../devlink/ButtonPrimary';
import { ButtonSecondary } from '../../devlink/ButtonSecondary';
import { BackButton } from '../../devlink/BackButton';
import { NavButton } from '../../devlink/NavButton';
import { SocalButton} from '../../devlink/SocalButton';
import { useTheme } from '../SzProvider';

export interface ButtonProps {
  text?: string;
  style?: React.CSSProperties;
  theme?: string;
  click?: (...args: any[]) => void;
  buttonIcon?: React.ReactNode;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
}

export function SzPrimaryButton({
  text,
  style,
  theme,
  click,
  onHover,
  leaveHover,
}: ButtonProps) {
  const { themeDefault } = useTheme();
  return (
    <ButtonPrimary
      buttonClick={{
        style: style,
        onClick: click,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
      }}
      theme={theme ? theme : themeDefault}
      text={text}
    />
  );
}

export function SzSecondaryButton({
  text,
  style,
  theme,
  click,
  onHover,
  leaveHover,
  buttonIcon,
}: ButtonProps) {
  const { themeDefault } = useTheme();
  return (
    <ButtonSecondary
      clickProps={{
        style: style,
        onClick: click,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
      }}
      theme={theme ? theme : themeDefault}
      text={text}
      icon={buttonIcon}
    />
  );
}

export function SzBackButton({
  style,
  theme,
  click,
  buttonIcon,
  onHover,
  leaveHover,
}: ButtonProps) {
  const { themeDefault } = useTheme();
  return (
    <BackButton
      styleProps={{
        style: style,
        onClick: click,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
      }}
      theme={theme ? theme : themeDefault}
      iconSlot={buttonIcon}
    />
  );
}

export function SzSocialButton({
  style,
  theme,
  click,
  buttonIcon,
  onHover,
  leaveHover,
}: ButtonProps) {
  const { themeDefault } = useTheme();
  return (
    <SocalButton
      styleProps={{
        style: style,
        onClick: click,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
      }}
      theme={theme ? theme : themeDefault}
      icon={buttonIcon}
    />
  );
}


export function SzNavButton({
  style,
  theme,
  click,
  buttonIcon,
  onHover,
  leaveHover,
}: ButtonProps) {
  const { themeDefault } = useTheme();
  return (
    <NavButton
      buttonProps={{
        style: style,
        onClick: click,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
      }}
      theme={theme ? theme : themeDefault}
      slot={buttonIcon}
    />
  );
}
