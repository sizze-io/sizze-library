import React from 'react';
import { PaymentPlan } from '../../devlink/PaymentPlan';
import { useTheme } from '../SzProvider';

export interface PaywallCardProps {
  style?: React.CSSProperties;
  theme?: string;
  period?: string;
  description?: string;
  price?: string;
  labelStyle?: React.CSSProperties;
  descriptionStyle?: React.CSSProperties;
  priceStyle?: React.CSSProperties;
  click?: (...args: any[]) => void;
  icon?: React.ReactNode;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
}

export function SzPaywallCard({
  period,
  style,
  theme,
  description,
  price,
  labelStyle,
  descriptionStyle,
  priceStyle,
  icon,
  click,
  onHover,
  leaveHover,
}: PaywallCardProps) {
  const { themeDefault } = useTheme();
  return (
    <PaymentPlan
      styleProps={{
        style: style,
        onClick: click,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
      }}
      theme={theme ? theme : themeDefault}
      period={period}
      description={description}
      price={price}
      labelStyle={{ style: labelStyle }}
      descriptionStyle={{ style: descriptionStyle }}
      priceStyle={{ style: priceStyle }}
      iconSlot={icon}
    />
  );
}
