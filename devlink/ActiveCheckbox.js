import React from "react";
import * as _Builtin from "./_Builtin";

export function ActiveCheckbox({
  as: _Component = _Builtin.Block,
  theme,
  iconProps = {},
}) {
  return (
    <_Component
      className="checkbox active"
      tag="div"
      data-theme={theme}
      {...iconProps}
    />
  );
}
