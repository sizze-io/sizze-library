import React from 'react';
import { WrapperWithButtom } from '../../devlink/WrapperWithButtom';
import { useTheme } from '../SzProvider';

export interface WrapperProps {
  style?: React.CSSProperties;
  theme?: string;
  button?: React.ReactNode;
  title?: string;
  titleStyle?: React.CSSProperties;
  subTitle?: string;
  subtitleStyle?: React.CSSProperties;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
}

export function SzWrapper({
  style,
  theme,
  button,
  title,
  subTitle,
  titleStyle,
  subtitleStyle,
  onHover,
  leaveHover,
  click,
}: WrapperProps) {
  const { themeDefault } = useTheme();
  return (
    <WrapperWithButtom
      styleProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
      theme={theme ? theme : themeDefault}
      buttonSlot={button}
      title={title}
      subTitle={subTitle}
      subtitleStyle={{ style: subtitleStyle }}
      titileStyle={{ style: titleStyle }}
    />
  );
}
