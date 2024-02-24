import React from 'react';
import { DetailPageComponent } from '../../devlink/DetailPageComponent';
import { useTheme } from '../SzProvider';

export interface DetailProps {
  style?: React.CSSProperties;
  theme?: string;
  image?: string;
  buttons?: React.ReactNode;
  slot?: React.ReactNode;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
}

export function SzDetail({
  image,
  style,
  theme,
  buttons,
  slot,
  onHover,
  leaveHover,
  click,
}: DetailProps) {
  const { themeDefault } = useTheme();
  return (
    <DetailPageComponent
      styleProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
      theme={theme ? theme : themeDefault}
      image={image}
      buttonsSlot={buttons}
      generalSlot={slot}
    />
  );
}
