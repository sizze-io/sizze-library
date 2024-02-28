import React from "react";
import * as _Builtin from "./_Builtin";
import { NavButton } from "./NavButton";

export function NavModal({
  as: _Component = _Builtin.Block,
  title = "Refine Results",
  titleStyle = {},
  theme,
  iconProps = {},
  rightIcon,
  styleProps = {},
}) {
  return (
    <_Component
      className="headertopmodal"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      <_Builtin.Block className="text-block-162" tag="div" {...titleStyle}>
        {title}
      </_Builtin.Block>
      <_Builtin.Block tag="div">
        {rightIcon ?? <NavButton iconProps={iconProps} />}
      </_Builtin.Block>
    </_Component>
  );
}
