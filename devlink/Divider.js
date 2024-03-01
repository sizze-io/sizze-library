import React from "react";
import * as _Builtin from "./_Builtin";

export function Divider({
  as: _Component = _Builtin.Block,
  theme = "theme",
  styleProps = {},
  text = "OR",
  textStyle = {},
  lineColor = {},
}) {
  return (
    <_Component
      className="dividerblock"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      <_Builtin.Block className="line" tag="div" {...lineColor} />
      <_Builtin.Block className="textsize4" tag="div" {...textStyle}>
        {text}
      </_Builtin.Block>
      <_Builtin.Block className="line" tag="div" {...lineColor} />
    </_Component>
  );
}
