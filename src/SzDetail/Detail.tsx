import React from 'react';
import { DetailPageComponent } from '../../devlink/DetailPageComponent';
import { useTheme } from '../SzProvider';

export interface DetailProps {
  style?: React.CSSProperties;
  theme?: string;
  image?: string;
  buttons?: React.ReactNode;
  slot?: React.ReactNode;
}

export function SzDetail({ image, style, theme, buttons, slot }: DetailProps) {
  const { themeDefault } = useTheme();
  return (
    <DetailPageComponent
      styleProps={{ style: style }}
      theme={theme ? theme : themeDefault}
      image={image}
      buttonsSlot={buttons}
      generalSlot={slot}
    />
  );
}
