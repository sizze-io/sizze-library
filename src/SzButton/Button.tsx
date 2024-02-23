import React from 'react';
import { ButtonPrimary } from '../../devlink/ButtonPrimary';
import { ButtonSecondary } from '../../devlink/ButtonSecondary';
import { BackButton } from '../../devlink/BackButton';
import { useTheme } from '../SzProvider';

export interface ButtonProps {
  text?: string;
  style?: React.CSSProperties;
  theme?: string;
  buttonClick?: (...args: any[]) => void;
  buttonIcon?: React.ReactNode;
}

export function SzPrimaryButton({
  text,
  style,
  theme,
  buttonClick,
}: ButtonProps) {
  const { themeDefault } = useTheme();
  return (
    <ButtonPrimary
      buttonClick={{ style: style, onClick: buttonClick }}
      theme={theme ? theme : themeDefault}
      text={text}
    />
  );
}

export function SzSecondaryButton({
  text,
  style,
  theme,
  buttonClick,
  buttonIcon,
}: ButtonProps) {
  const { themeDefault } = useTheme();
  return (
    <ButtonSecondary
      clickProps={{ style: style, onClick: buttonClick }}
      theme={theme ? theme : themeDefault}
      text={text}
      icon={buttonIcon}
    />
  );
}

export function SzBackButton({
  style,
  theme,
  buttonClick,
  buttonIcon,
}: ButtonProps) {
  const { themeDefault } = useTheme();
  return (
    <BackButton
      styleProps={{ style: style, onClick: buttonClick }}
      theme={theme ? theme : themeDefault}
      iconSlot={buttonIcon}
    />
  );
}
