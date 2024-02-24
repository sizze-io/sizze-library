import React from 'react';
import { Galery } from '../../devlink/Galery';
import { useTheme } from '../SzProvider';

export interface GaleryWrapperProps {
  style?: React.CSSProperties;
  theme?: string;
  mainTitle?: string;
  mainTitleStyle?: React.CSSProperties;
  rightTitleStyle?: React.CSSProperties;
  rightTitle?: string;
  galerySlot?: React.ReactNode;
  click?: (...args: any[]) => void;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  clickGeneral?: (...args: any[]) => void;
}

export function SzGalery({
  style,
  theme,
  mainTitle,
  mainTitleStyle,
  rightTitle,
  click,
  rightTitleStyle,
  onHover,
  leaveHover,
  clickGeneral,
}: GaleryWrapperProps) {
  const { themeDefault } = useTheme();
  return (
    <Galery
      styleProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: clickGeneral,
      }}
      theme={theme ? theme : themeDefault}
      mainTitle={mainTitle}
      rightTitle={rightTitle}
      mainTitleStyle={{ style: mainTitleStyle }}
      rightTitleStyle={{ style: rightTitleStyle }}
      rightAction={{ onClick: click }}
    />
  );
}
