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
}: WrapperProps) {
  const { themeDefault } = useTheme();
  return (
    <WrapperWithButtom
      styleProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
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
