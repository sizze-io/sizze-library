import React from 'react';
import { SmalScrollCard } from '../../devlink/SmalScrollCard';
import { useTheme } from '../SzProvider';

export interface GaleryTextProps {
  style?: React.CSSProperties;
  theme?: string;
  url?: string;
  imageStyle?: React.CSSProperties;
  click?: (...args: any[]) => void;
  title?: string;
  subTitle?: string;
  titleStyle?: React.CSSProperties;
  subtitleStyle?: React.CSSProperties;
}

export function SzGaleryItemWithText({
  style,
  theme,
  click,
  url,
  imageStyle,
  title,
  subTitle,
  titleStyle,
  subtitleStyle,
}: GaleryTextProps) {
  const { themeDefault } = useTheme();
  return (
    <SmalScrollCard
      styleProps={{ style: style, onClick: click }}
      theme={theme ? theme : themeDefault}
      image={url}
      imageStyle={{ style: imageStyle }}
      title={title}
      subTitle={subTitle}
      titleStyle={{ style: titleStyle }}
      subTitleStyle={{ style: subtitleStyle }}
    />
  );
}
