import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonPrimary } from "./ButtonPrimary";

export function OrderWrapper({
  as: _Component = _Builtin.Block,
  buttonSlot,
  subtotalPrice = {},
  subtotalPriceText = "Subtotal: $3,835",
  shippingPrice = {},
  shippingPriceText = "Shipping: UPS $225",
  title = {},
  titleText = "Total",
  priceStyle = {},
  price = "$225",
  theme,
  styelProps = {},
}) {
  return (
    <_Component
      className="wrappergeneral"
      tag="div"
      data-theme={theme}
      {...styelProps}
    >
      <_Builtin.Block className="div-block-47" tag="div">
        <_Builtin.Block tag="div">
          <_Builtin.Block
            className="text-block-13"
            tag="div"
            {...subtotalPrice}
          >
            {subtotalPriceText}
          </_Builtin.Block>
          <_Builtin.Block
            className="text-block-13"
            tag="div"
            {...shippingPrice}
          >
            {shippingPriceText}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="div-block-48" tag="div">
          <_Builtin.Block className="text-block-13" tag="div" {...title}>
            {titleText}
          </_Builtin.Block>
          <_Builtin.Block className="text-block-17" tag="div" {...priceStyle}>
            {price}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block tag="div">
        {buttonSlot ?? <ButtonPrimary text="Place order" />}
      </_Builtin.Block>
    </_Component>
  );
}
