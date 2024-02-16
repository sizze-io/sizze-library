import React from "react";
import * as _Builtin from "./_Builtin";
import { DefaultIcon } from "./DefaultIcon";

export function TabItem({
  as: _Component = _Builtin.Block,
  tabText = "Tab 1",
  tabIcon,
  tabClick = {},
  theme,
}) {
  return (
    <_Component
      className="tab color"
      tag="div"
      data-theme={theme}
      {...tabClick}
    >
      <_Builtin.Block className="wrappericon" tag="div">
        {tabIcon ?? <DefaultIcon />}
      </_Builtin.Block>
      <_Builtin.Block className="text-block-5" tag="div">
        {tabText}
      </_Builtin.Block>
    </_Component>
  );
}
