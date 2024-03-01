import React from 'react';
import { CradLarge } from '../../devlink/CradLarge';
import { useTheme } from '../SzProvider';

export interface ImageCardProps {
  imageStyle?: React.CSSProperties;
  generalStyle?: React.CSSProperties;
  theme?: string;
  url?: string;
  title?: string;
  titleStyle?: React.CSSProperties;
  subTitle?: string;
  subTitleStyle?: React.CSSProperties;
  description?: string;
  descriptionStyle?: React.CSSProperties;
  labelText?: string;
  labelStyle?: React.CSSProperties;
  labelAction?: (...args: any[]) => void;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
  labelTextStyle?: React.CSSProperties;
}

export function SzImageCard({
  imageStyle,
  generalStyle,
  theme,
  url,
  onHover,
  leaveHover,
  click,
  title,
  subTitle,
  description,
  titleStyle,
  subTitleStyle,
  descriptionStyle,
  labelAction,
  labelText,
  labelStyle,
  labelTextStyle
}: ImageCardProps) {
  const { themeDefault } = useTheme();
  return (
    <CradLarge
      generalStyle={{
        style: generalStyle,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
      theme={theme ? theme : themeDefault}
      imageStyle={{ style: imageStyle }}
      image={url}
      labelTextStyle={{ style: labelTextStyle }}
      titleStyle={{ style: titleStyle }}
      subTitleStyle={{ style: subTitleStyle }}
      descriptionStyle={{ style: descriptionStyle }}
      description={description}
      title={title}
      subtitle={subTitle}
      labelTitle={labelText}
      labelStyle={{ style: labelStyle, onClick: labelAction }}
    />
  );
}
