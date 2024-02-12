import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonPrimary({
  as: _Component = _Builtin.Block,
  text = "Continue",
}) {
  return (
    <_Component className="buttonprimary" tag="div">
      <_Builtin.Block tag="div">{text}</_Builtin.Block>
    </_Component>
  );
}
