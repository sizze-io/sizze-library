import React from "react";
import * as _Builtin from "./_Builtin";
import { DefaultIcon } from "./DefaultIcon";

export function NavBar2({
  as: _Component = _Builtin.Block,
  mainText = "Settings",
  rightText = "Filters",
  leftText = "Back",
  backIcon,
  backClick = {},
  rightClick = {},
  style = {},
  theme,
}) {
  return (
    <_Component className="navbar-1" tag="div" data-theme={theme} {...style}>
      <_Builtin.Block className="spaceforiphone" tag="div" />
      <_Builtin.Block className="secondlinenavbar" tag="div">
        <_Builtin.Block className="gridnavbar" tag="div">
          <_Builtin.Block
            className="lefticon"
            id="w-node-_51f16e2c-3b5e-b3cc-e769-f23d8fc4f5bc-8fc4f5b8"
            tag="div"
            {...backClick}
          >
            <_Builtin.Block className="wrappericon" tag="div">
              {backIcon ?? <DefaultIcon />}
            </_Builtin.Block>
            <_Builtin.Block className="text-block" tag="div">
              {leftText}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className="centertitle"
            id="w-node-_51f16e2c-3b5e-b3cc-e769-f23d8fc4f5c0-8fc4f5b8"
            tag="div"
          >
            <_Builtin.Block tag="div">{mainText}</_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className="righticon"
            id="w-node-_51f16e2c-3b5e-b3cc-e769-f23d8fc4f5c3-8fc4f5b8"
            tag="div"
            {...rightClick}
          >
            <_Builtin.Block tag="div">{rightText}</_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
