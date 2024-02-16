import React from "react";
import * as _Builtin from "./_Builtin";
import { Checkbox } from "./Checkbox";

export function PaymentPlan({
  as: _Component = _Builtin.Block,
  period = "One-time",
  description = "Opt for a one-off payment plan ",
  price = "$200 / one-time",
  theme,
  styleProps = {},
  labelStyle = {},
  descriptionStyle = {},
  priceStyle = {},
  iconSlot,
}) {
  return (
    <_Component
      className="paymentplan"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      <_Builtin.Block className="_1row" tag="div">
        <_Builtin.Block className="pricetag" tag="div" {...labelStyle}>
          <_Builtin.Block tag="div">{period}</_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block tag="div">{iconSlot ?? <Checkbox />}</_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="div-block-14" tag="div">
        <_Builtin.Block className="textsize4" tag="div" {...descriptionStyle}>
          {description}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="div-block-14" tag="div" {...priceStyle}>
        <_Builtin.Block className="textsize3" tag="div">
          {price}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
