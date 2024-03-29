import React from "react";
import * as _Builtin from "./_Builtin";
import { DefaultIcon } from "./DefaultIcon";

export function ButtonSecondary({
  as: _Component = _Builtin.Block,
  text = "Read",
  theme,
  clickProps = {},
  icon,
}) {
  return (
    <_Component
      className="buttonsecondary"
      tag="div"
      data-theme={theme}
      {...clickProps}
    >
      <_Builtin.Block className="wrappericon" tag="div">
        {icon ?? <DefaultIcon />}
      </_Builtin.Block>
      <_Builtin.Block tag="div">{text}</_Builtin.Block>
    </_Component>
  );
}
