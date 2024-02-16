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
}

export function SzPaywall({
  title,
  style,
  theme,
  subTitle,
  slot,
  titleStyle,
  subTitleStyle,
}: PaywallProps) {
  const { themeDefault } = useTheme();
  return (
    <PaywallComponent
      styleProps={{ style: style }}
      theme={theme ? theme : themeDefault}
      title={title}
      subTitle={subTitle}
      payWallSlot={slot}
      titleStyle={{ style: titleStyle }}
      subTitleStyle={{ style: subTitleStyle }}
    />
  );
}
