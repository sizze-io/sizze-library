import React from "react";
import * as _Builtin from "./_Builtin";
import { DefaultIcon } from "./DefaultIcon";

export function ButtonSecondary({
  as: _Component = _Builtin.Block,
  text = "Read",
}) {
  return (
    <_Component className="buttonsecondary" tag="div">
      <_Builtin.Block className="wrappericon" tag="div">
        <DefaultIcon />
      </_Builtin.Block>
      <_Builtin.Block tag="div">{text}</_Builtin.Block>
    </_Component>
  );
}
