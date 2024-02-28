import React from 'react';
import { CartCard } from '../../devlink/CartCard';
import { useTheme } from '../SzProvider';

export interface ShippingCardItemProps {
  style?: React.CSSProperties;
  theme?: string;
  title?: string;
  titleStyle?: React.CSSProperties;
  slot?: React.ReactNode;
  url?: string;
  imageStyle?: string;
  subtitle?: string;
  subtitleStyle?: React.CSSProperties;
  click?: (...args: any[]) => void;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  price?: string;
  priceStyle?: React.CSSProperties;
}

export function SzShippingCardItem({
  style,
  theme,
  click,
  onHover,
  leaveHover,
  title,
  titleStyle,
  slot,
  subtitle,
  subtitleStyle,
  imageStyle,
  url,
  price,
  priceStyle,
}: ShippingCardItemProps) {
  const { themeDefault } = useTheme();
  return (
    <CartCard
      styleProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
      inputSlot={slot}
      theme={theme ? theme : themeDefault}
      title={title}
      price={price}
      priceStyle={{style: priceStyle}}
      image={url}
      imageStyle={{style: imageStyle}}
      titleStyle={{ style: titleStyle }}
      subTitle={subtitle}
      subtitleStyle={{ style: subtitleStyle }}
    />
  );
}
