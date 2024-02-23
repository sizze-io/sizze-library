import React from 'react';
import { ImageFullDetails } from '../../devlink/ImageFullDetails';
import { useTheme } from '../SzProvider';

export interface ImageProps {
  imageStyle?: React.CSSProperties;
  generalStyle?: React.CSSProperties;
  theme?: string;
  url?: string;
}

export function SzImage({ imageStyle, generalStyle, theme, url }: ImageProps) {
  const { themeDefault } = useTheme();
  return (
    <ImageFullDetails
      styleProps={{ style: generalStyle }}
      theme={theme ? theme : themeDefault}
      imageStyle={{ style: imageStyle }}
      image={url}
    />
  );
}
