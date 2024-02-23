import React from "react";
import * as _Builtin from "./_Builtin";

export function TitleRow({
  as: _Component = _Builtin.Block,
  text = "Recently Viewed",
  rightText = true,
  rightText = "See all",
}) {
  return (
    <_Component className="titlerow" tag="div">
      <_Builtin.Block className="text-block-1-2rem" tag="div">
        {text}
      </_Builtin.Block>
      <_Builtin.Block tag="div">
        {rightText ? (
          <_Builtin.Block tag="div">{rightText}</_Builtin.Block>
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
