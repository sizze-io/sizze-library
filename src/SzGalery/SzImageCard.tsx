import React from 'react';
import { GallaryCard } from '../../devlink/GallaryCard';
import { useTheme } from '../SzProvider';

export interface GaleryImageProps {
  style?: React.CSSProperties;
  theme?: string;
  url?: string;
  imageStyle?: React.CSSProperties;
  click?: (...args: any[]) => void;
}

export function SzGaleryCard({
  style,
  theme,
  click,
  url,
  imageStyle,
}: GaleryImageProps) {
  const { themeDefault } = useTheme();
  return (
    <GallaryCard
      styleProps={{ style: style, onClick: click }}
      theme={theme ? theme : themeDefault}
      image={url}
      imageStyle={{ style: imageStyle }}
    />
  );
}
