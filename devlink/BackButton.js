import React from "react";
import * as _Builtin from "./_Builtin";
import { IconLeft } from "./IconLeft";

export function BackButton({
  as: _Component = _Builtin.Block,
  styleProps = {},
  iconSlot,
  theme,
}) {
  return (
    <_Component
      className="arrowbutton"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      {iconSlot ?? <IconLeft />}
    </_Component>
  );
}
