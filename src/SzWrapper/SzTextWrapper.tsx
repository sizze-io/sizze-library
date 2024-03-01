import React from 'react';
import { TextBlock } from '../../devlink/TextBlock';
import { useTheme } from '../SzProvider';

export interface TextWrapperProps {
  style?: React.CSSProperties;
  theme?: string;
  title?: string;
  titleStyle?: React.CSSProperties;
  subTitle?: string;
  subTitleStyle?: React.CSSProperties;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
}

export function SzTextWrapper({
  style,
  theme,
  title,
  subTitle,
  titleStyle,
  subTitleStyle,
  onHover,
  leaveHover,
  click,
}: TextWrapperProps) {
  const { themeDefault } = useTheme();
  return (
    <TextBlock
      styleProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
      theme={theme ? theme : themeDefault}
      title={title}
      subtitle={subTitle}
      subtitleStyle={{ style: subTitleStyle }}
      titleStyle={{ style: titleStyle }}
    />
  );
}
