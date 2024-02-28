import React from 'react';
import { AccountWrapper } from '../../devlink/AccountWrapper';
import { useTheme } from '../SzProvider';

export interface SzAccountWrapperProps {
  style?: React.CSSProperties;
  theme?: string;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
  rightIcon?: React.ReactNode;
  url?: string;
  imageStyle?: React.CSSProperties;
  title?: string;
  subTitle?: string;
  titleStyle?: React.CSSProperties;
  subtitleStyle?: React.CSSProperties;
  imageClick?: (...args: any[]) => void;
  rightClick?: (...args: any[]) => void;
}

export function SzAccountWrapper({
  style,
  theme,
  rightIcon,
  onHover,
  leaveHover,
  click,
  url,
  imageStyle,
  title,
  subTitle,
  titleStyle,
  subtitleStyle,
  imageClick,
  rightClick,
}: SzAccountWrapperProps) {
  const { themeDefault } = useTheme();
  return (
    <AccountWrapper
      generalStyle={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
      theme={theme ? theme : themeDefault}
      rightIcon={rightIcon}
      name={title}
      nameStyle={{ style: titleStyle }}
      email={subTitle}
      emailStyle={{ style: subtitleStyle }}
      imageStyle={{ style: imageStyle, onClick: imageClick }}
      image={url}
      rightClick={{ onClick: rightClick }}
    />
  );
}
