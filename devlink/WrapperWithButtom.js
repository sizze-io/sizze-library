import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonPrimary } from "./ButtonPrimary";

export function WrapperWithButtom({
  as: _Component = _Builtin.Block,
  buttonSlot,
  title = "Name",
  titileStyle = {},
  subTitle = "Description",
  subtitleStyle = {},
  theme,
  styleProps = {},
}) {
  return (
    <_Component
      className="wrappergeneral"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      <_Builtin.Block className="textwrapper center" tag="div" data-theme="">
        <_Builtin.Heading className="headerh4" tag="h3" {...titileStyle}>
          {title}
        </_Builtin.Heading>
        <_Builtin.Block className="textsize4" tag="div" {...subtitleStyle}>
          {subTitle}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block tag="div">
        {buttonSlot ?? <ButtonPrimary text="Add to cart" />}
      </_Builtin.Block>
    </_Component>
  );
}
