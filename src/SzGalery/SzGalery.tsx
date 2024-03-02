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
  slot?: React.ReactNode;
  click?: (...args: any[]) => void;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  clickGeneral?: (...args: any[]) => void;
  direction?: string;
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
  slot,
  direction,
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
      scrollStyle={{
        style: {
          flexDirection: direction,
          overflow: direction === 'column' ? 'inherit' : 'scroll',
          width: direction === 'column' ? '0' : '100vw',
        },
      }}
      slot={slot}
      theme={theme ? theme : themeDefault}
      mainTitle={mainTitle}
      rightTitle={rightTitle}
      mainTitleStyle={{ style: mainTitleStyle }}
      rightTitleStyle={{ style: rightTitleStyle }}
      rightAction={{ onClick: click }}
    />
  );
}
