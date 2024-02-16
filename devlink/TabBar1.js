import React from "react";
import * as _Builtin from "./_Builtin";
import { TabItem } from "./TabItem";
import { DefaultIcon } from "./DefaultIcon";

export function TabBar1({
  as: _Component = _Builtin.Block,
  tabSlot,
  style = {},
  theme,
}) {
  return (
    <_Component className="tabbar" tag="div" data-theme={theme} {...style}>
      {tabSlot ?? (
        <>
          <TabItem />
          <_Builtin.Block className="tab" tag="div">
            <_Builtin.Block className="wrappericon" tag="div">
              <DefaultIcon />
            </_Builtin.Block>
            <_Builtin.Block className="text-block-5" tag="div">
              {"Tab 2"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="tab" tag="div">
            <_Builtin.Block className="wrappericon" tag="div">
              <DefaultIcon />
            </_Builtin.Block>
            <_Builtin.Block className="text-block-5" tag="div">
              {"Tab 3"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="tab" tag="div">
            <_Builtin.Block className="wrappericon" tag="div">
              <DefaultIcon />
            </_Builtin.Block>
            <_Builtin.Block className="text-block-5" tag="div">
              {"Tab 4"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="tab" tag="div">
            <_Builtin.Block className="wrappericon" tag="div">
              <DefaultIcon />
            </_Builtin.Block>
            <_Builtin.Block className="text-block-5" tag="div">
              {"Tab 5"}
            </_Builtin.Block>
          </_Builtin.Block>
        </>
      )}
    </_Component>
  );
}
