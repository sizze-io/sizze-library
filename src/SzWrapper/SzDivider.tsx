import React from 'react';
import { Divider } from '../../devlink/Divider';
import { useTheme } from '../SzProvider';

export interface DeviderProps {
  style?: React.CSSProperties;
  theme?: string;
  text?: string;
  textStyle?: React.CSSProperties;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
  lineStyle?: React.CSSProperties;
}

export function SzDivider({
  style,
  theme,
  text,
  lineStyle,
  textStyle,
  onHover,
  leaveHover,
  click,
}: DeviderProps) {
  const { themeDefault } = useTheme();
  return (
    <Divider
      styleProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
      theme={theme ? theme : themeDefault}
      text={text}
      textStyle={{ style: textStyle }}
      lineColor={{ style: lineStyle }}
    />
  );
}
