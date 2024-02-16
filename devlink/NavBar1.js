import React from "react";
import * as _Builtin from "./_Builtin";
import { DefaultIcon } from "./DefaultIcon";

export function NavBar1({
  as: _Component = _Builtin.Block,
  visibilityIcon = true,
  text = "Home page",
  icon,
  style = {},
  theme,
}) {
  return (
    <_Component className="navbar-1" tag="div" data-theme={theme} {...style}>
      <_Builtin.Block className="spaceforiphone" tag="div" />
      <_Builtin.Block className="thirdlinenavbar" tag="div">
        <_Builtin.Block className="headernavbar" tag="div">
          {text}
        </_Builtin.Block>
        {visibilityIcon ? (
          <_Builtin.Block className="lefticonthirdline" tag="div">
            <_Builtin.Block className="iconwrapper" tag="div">
              <_Builtin.Block className="wrappericon" tag="div">
                {icon ?? <DefaultIcon />}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
