import React from 'react';
import { PaywallComponent } from '../../devlink/PaywallComponent';
import { useTheme } from '../SzProvider';

export interface PaywallProps {
  style?: React.CSSProperties;
  theme?: string;
  title?: string;
  subTitle?: string;
  titleStyle?: React.CSSProperties;
  subTitleStyle?: React.CSSProperties;
  slot?: React.ReactNode;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
}

export function SzPaywall({
  title,
  style,
  theme,
  subTitle,
  slot,
  titleStyle,
  subTitleStyle,
  onHover,
  leaveHover,
  click,
}: PaywallProps) {
  const { themeDefault } = useTheme();
  return (
    <PaywallComponent
      styleProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
      theme={theme ? theme : themeDefault}
      title={title}
      subTitle={subTitle}
      payWallSlot={slot}
      titleStyle={{ style: titleStyle }}
      subTitleStyle={{ style: subTitleStyle }}
    />
  );
}
