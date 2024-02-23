import React from "react";
import * as _Builtin from "./_Builtin";

export function TextWrapper({
  as: _Component = _Builtin.Block,
  titile = "Name",
  subtitle = "Description",
}) {
  return (
    <_Component className="textwrapper" tag="div">
      <_Builtin.Heading className="headerh4" tag="h3">
        {titile}
      </_Builtin.Heading>
      <_Builtin.Block className="textsize4" tag="div">
        {subtitle}
      </_Builtin.Block>
    </_Component>
  );
}
