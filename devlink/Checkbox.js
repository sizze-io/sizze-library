import React from "react";
import * as _Builtin from "./_Builtin";

export function Checkbox({
  as: _Component = _Builtin.Block,
  iconProps = {},
  theme,
}) {
  return (
    <_Component
      className="checkbox div-block-19"
      tag="div"
      data-theme={theme}
      {...iconProps}
    >
      <_Builtin.Block className="div-block-20" tag="div" />
    </_Component>
  );
}
