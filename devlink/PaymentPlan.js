import React from "react";
import * as _Builtin from "./_Builtin";
import { Checkbox } from "./Checkbox";

export function PaymentPlan({
  as: _Component = _Builtin.Block,
  period = "One-time",
  description = "Opt for a one-off payment plan ",
  price = "$200 / one-time",
}) {
  return (
    <_Component className="paymentplan" tag="div">
      <_Builtin.Block className="_1row" tag="div">
        <_Builtin.Block className="pricetag" tag="div">
          <_Builtin.Block tag="div">{period}</_Builtin.Block>
        </_Builtin.Block>
        <Checkbox />
      </_Builtin.Block>
      <_Builtin.Block className="div-block-14" tag="div">
        <_Builtin.Block className="textsize4" tag="div">
          {description}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="div-block-14" tag="div">
        <_Builtin.Block className="textsize3" tag="div">
          {price}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
