import React from "react";
import * as _Builtin from "./_Builtin";

export function SegmentControl({
  as: _Component = _Builtin.Block,
  title1 = "Title 1",
  title2 = "Title 2",
}) {
  return (
    <_Component className="segmentcontrol" tag="div">
      <_Builtin.Block
        className="uui-career09_tab-link-2 active"
        id="w-node-_3cf97ca2-f117-c1df-d663-f5423bf78b13-3bf78b12"
        tag="div"
      >
        <_Builtin.Block tag="div">{title1}</_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className="uui-career09_tab-link-2"
        id="w-node-_3cf97ca2-f117-c1df-d663-f5423bf78b16-3bf78b12"
        tag="div"
      >
        <_Builtin.Block tag="div">{title2}</_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
