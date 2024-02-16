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
  itemClick?: (...args: any[]) => void;
  icon?: React.ReactNode;
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
  itemClick,
}: PaywallCardProps) {
  const { themeDefault } = useTheme();
  return (
    <PaymentPlan
      styleProps={{ style: style, onClick: itemClick }}
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
