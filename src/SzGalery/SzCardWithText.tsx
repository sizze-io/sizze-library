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
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
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
  onHover,
  leaveHover,
}: GaleryTextProps) {
  const { themeDefault } = useTheme();
  return (
    <SmalScrollCard
      styleProps={{
        style: style,
        onClick: click,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
      }}
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
