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
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
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
  onHover,
  leaveHover,
  style,
  theme,
  click,
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
      style={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
    />
  );
}
