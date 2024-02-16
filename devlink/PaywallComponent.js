import React from "react";
import * as _Builtin from "./_Builtin";
import { PaymentPlan } from "./PaymentPlan";

export function PaywallComponent({
  as: _Component = _Builtin.Block,
  title = "Update the plan",
  subTitle = "Select a plan to subscribe to",
  theme,
  styleProps = {},
  titleStyle = {},
  subTitleStyle = {},
  payWallSlot,
}) {
  return (
    <_Component
      className="wrappergeneral"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      <_Builtin.Block className="leftlihnblock" tag="div">
        <_Builtin.Block className="textwrapper" tag="div">
          <_Builtin.Heading className="headerh4" tag="h3" {...titleStyle}>
            {title}
          </_Builtin.Heading>
          <_Builtin.Block className="textsize4" tag="div" {...subTitleStyle}>
            {subTitle}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="div-block-16" tag="div">
        {payWallSlot ?? (
          <>
            <PaymentPlan
              period="Annual"
              description="Select this for a yearly subscription"
              price="$120 / mo"
            />
            <PaymentPlan />
          </>
        )}
      </_Builtin.Block>
    </_Component>
  );
}
