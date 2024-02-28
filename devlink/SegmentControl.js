import React from "react";
import * as _Builtin from "./_Builtin";
import { SegmentItem } from "./SegmentItem";

export function SegmentControl({
  as: _Component = _Builtin.Block,
  title1 = "Title 1",
  title2 = "Title 2",
  slot,
  theme,
  style = {},
}) {
  return (
    <_Component
      className="segmentcontrol"
      tag="div"
      data-theme={theme}
      {...style}
    >
      {slot ?? (
        <>
          <SegmentItem title1={title1} />
          <_Builtin.Block
            className="uui-career09_tab-link-2"
            id="w-node-_3cf97ca2-f117-c1df-d663-f5423bf78b16-3bf78b12"
            tag="div"
          >
            <_Builtin.Block tag="div">{title2}</_Builtin.Block>
          </_Builtin.Block>
        </>
      )}
    </_Component>
  );
}
