import React from 'react';
import { DiscoverCard } from '../../devlink/DiscoverCard';
import { useTheme } from '../SzProvider';

export interface DiscoverCardProps {
  imageStyle?: React.CSSProperties;
  generalStyle?: React.CSSProperties;
  theme?: string;
  url?: string;
  title?: string;
  titleStyle?: React.CSSProperties;
  subTitle?: string;
  subTitleStyle?: React.CSSProperties;
  labelText?: string;
  labelStyle?: React.CSSProperties;
  labelAction?: (...args: any[]) => void;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
  labelTextStyle?: React.CSSProperties;
}

export function SzDiscoverCard({
  imageStyle,
  generalStyle,
  theme,
  url,
  onHover,
  leaveHover,
  click,
  title,
  subTitle,
  titleStyle,
  subTitleStyle,
  labelAction,
  labelText,
  labelStyle,
  labelTextStyle
}: DiscoverCardProps) {
  const { themeDefault } = useTheme();
  return (
    <DiscoverCard
      styleProps={{
        style: generalStyle,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
      theme={theme ? theme : themeDefault}
      imageStyle={{ style: imageStyle }}
      image={url}
      titleStyle={{ style: titleStyle }}
      subTitleStyle={{ style: subTitleStyle }}
      title={title}
      subTitle={subTitle}
      labelText={labelText}
      labelTextStyle={{style: labelTextStyle}}
      labelStyle={{ style: labelStyle, onClick: labelAction }}
    />
  );
}
