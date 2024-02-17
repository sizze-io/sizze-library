import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonPrimary({
  as: _Component = _Builtin.Block,
  text = "Continue",
  theme,
  buttonClick = {},
}) {
  return (
    <_Component
      className="buttonprimary"
      tag="div"
      data-theme={theme}
      {...buttonClick}
    >
      <_Builtin.Block className="text-block-9" tag="div">
        {text}
      </_Builtin.Block>
    </_Component>
  );
}
