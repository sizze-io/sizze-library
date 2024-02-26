import React from 'react';
import { ThinCardHorizontal } from '../../devlink/ThinCardHorizontal';
import { useTheme } from '../SzProvider';

export interface GaleryHorizontalProps {
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
  icon?: React.ReactNode;
}

export function SzGaleryItemHorizontal({
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
  icon
}: GaleryHorizontalProps) {
  const { themeDefault } = useTheme();
  return (
    <ThinCardHorizontal
      styleProps={{
        style: style,
        onClick: click,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
      }}
      theme={theme ? theme : themeDefault}
      iconSlot={icon}
      image={url}
      imageStyle={{ style: imageStyle }}
      title={title}
      subTitle={subTitle}
      titleStyle={{ style: titleStyle }}
      subTitleStyle={{ style: subtitleStyle }}
    />
  );
}
