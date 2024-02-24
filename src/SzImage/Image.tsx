import React from 'react';
import { ImageFullDetails } from '../../devlink/ImageFullDetails';
import { useTheme } from '../SzProvider';

export interface ImageProps {
  imageStyle?: React.CSSProperties;
  generalStyle?: React.CSSProperties;
  theme?: string;
  url?: string;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
}

export function SzImage({
  imageStyle,
  generalStyle,
  theme,
  url,
  onHover,
  leaveHover,
}: ImageProps) {
  const { themeDefault } = useTheme();
  return (
    <ImageFullDetails
      styleProps={{
        style: generalStyle,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
      }}
      theme={theme ? theme : themeDefault}
      imageStyle={{ style: imageStyle }}
      image={url}
    />
  );
}
