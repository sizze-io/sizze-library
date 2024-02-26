import React from 'react';
import { ShippingCard } from '../../devlink/ShippingCard';
import { useTheme } from '../SzProvider';

export interface ShippingCardProps {
  style?: React.CSSProperties;
  theme?: string;
  title?: string;
  titleStyle?: React.CSSProperties;
  slot?: React.ReactNode;
  click?: (...args: any[]) => void;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
}

export function SzShippingCard({
  style,
  theme,
  click,
  onHover,
  leaveHover,
  title,
  titleStyle,
  slot,
}: ShippingCardProps) {
  const { themeDefault } = useTheme();
  return (
    <ShippingCard
      styleProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
      slot={slot}
      theme={theme ? theme : themeDefault}
      header={title}
      headerStyle={{ style: titleStyle }}
    />
  );
}
