import React from 'react';
import { OrderWrapper } from '../../devlink/OrderWrapper';
import { useTheme } from '../SzProvider';

export interface OrderWrapperProps {
  style?: React.CSSProperties;
  theme?: string;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
  button?: React.ReactNode;
  title?: string;
  titleStyle?: React.CSSProperties;
  price?: string;
  priceStyle?: React.CSSProperties;
  subTotalText?: string;
  subTotalTextStyle?: React.CSSProperties;
  shippingText?: string;
  shippingTextStyle?: React.CSSProperties;
}

export function SzOrderWrapper({
  style,
  theme,
  button,
  title,
  price,
  priceStyle,
  subTotalText,
  subTotalTextStyle,
  shippingText,
  shippingTextStyle,
  titleStyle,
  onHover,
  leaveHover,
  click,
}: OrderWrapperProps) {
  const { themeDefault } = useTheme();
  return (
    <OrderWrapper
      styelProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
      theme={theme ? theme : themeDefault}
      buttonSlot={button}
      titleText={title}
      price={price}
      priceStyle={{ style: priceStyle }}
      title={{ style: titleStyle }}
      subtotalPriceText={subTotalText}
      subtotalPrice={{ style: subTotalTextStyle }}
      shippingPriceText={shippingText}
      shippingPrice={{ style: shippingTextStyle }}
    />
  );
}
