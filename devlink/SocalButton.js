import React from "react";
import * as _Builtin from "./_Builtin";
import { GoogleIcon } from "./GoogleIcon";

export function SocalButton({
  as: _Component = _Builtin.Block,
  styleProps = {},
  icon,
  theme,
}) {
  return (
    <_Component
      className="socialmediablock"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      {icon ?? (
        <_Builtin.Block className="wrappericon" tag="div">
          <GoogleIcon />
        </_Builtin.Block>
      )}
    </_Component>
  );
}
