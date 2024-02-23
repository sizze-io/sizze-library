import React from 'react';
import { NavBar2 } from '../../devlink/NavBar2';
import { useTheme } from '../SzProvider';

export interface SzNavWithActionProps {
  mainText?: string;
  rightText?: string;
  leftText?: string;
  backIcon?: React.ReactNode;
  backClick?: (...args: any[]) => void;
  rightClick?: (...args: any[]) => void;
  style?: React.CSSProperties;
  theme?: string;
}

export function SzNavWithAction({
  mainText,
  rightText,
  leftText,
  backIcon,
  backClick,
  rightClick,
  style,
  theme,
}: SzNavWithActionProps) {
  const { themeDefault } = useTheme();
  return (
    <NavBar2
      mainText={mainText}
      theme={theme ? theme : themeDefault}
      backSlot={backIcon}
      rightText={rightText}
      leftText={leftText}
      backClick={{ onClick: backClick }}
      rightClick={{ onClick: rightClick }}
      style={{ style: style }}
    />
  );
}
