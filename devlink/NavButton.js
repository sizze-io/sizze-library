import React from "react";
import * as _Builtin from "./_Builtin";
import { CloseIcon } from "./CloseIcon";

export function NavButton({
  as: _Component = _Builtin.Block,
  iconProps = {},
  theme,
  buttonProps = {},
  slot,
}) {
  return (
    <_Component
      className="div-block-310"
      tag="div"
      data-theme={theme}
      {...buttonProps}
    >
      {slot ?? <CloseIcon iconProps={iconProps} />}
    </_Component>
  );
}
