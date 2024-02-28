import React from 'react';
import { ScrollCardHorizontallFull } from '../../devlink/ScrollCardHorizontallFull';
import { useTheme } from '../SzProvider';

export interface GaleryHorizontalFullProps {
  style?: React.CSSProperties;
  theme?: string;
  url?: string;
  imageStyle?: React.CSSProperties;
  click?: (...args: any[]) => void;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  title?: string;
  subTitle?: string;
  titleStyle?: React.CSSProperties;
  subtitleStyle?: React.CSSProperties;
  starSlot?: React.ReactNode;
  stars?: string;
  starsStyle?: React.CSSProperties;
}

export function SzGaleryItemHorizontalFull({
  style,
  theme,
  click,
  url,
  imageStyle,
  title,
  subTitle,
  titleStyle,
  subtitleStyle,
  onHover,
  leaveHover,
  starSlot,
  stars,
  starsStyle,
}: GaleryHorizontalFullProps) {
  const { themeDefault } = useTheme();
  return (
    <ScrollCardHorizontallFull
      styleProps={{
        style: style,
        onClick: click,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
      }}
      theme={theme ? theme : themeDefault}
      starsSlot={starSlot}
      image={url}
      imageStyle={{ style: imageStyle }}
      title={title}
      subTitle={subTitle}
      titleStyle={{ style: titleStyle }}
      subtitleStyle={{ style: subtitleStyle }}
      stars={stars}
      starsStyle={{ style: starsStyle }}
    />
  );
}
