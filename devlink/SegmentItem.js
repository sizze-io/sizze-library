import React from "react";
import * as _Builtin from "./_Builtin";

export function SegmentItem({
  as: _Component = _Builtin.Block,
  title1 = "Title 1",
  segmentProps = {},
  titleStyle = {},
  theme,
}) {
  return (
    <_Component
      className="uui-career09_tab-link-2 active"
      id="w-node-bede94dd-fb9b-66a5-2d53-12124fea7a2a-4fea7a2a"
      tag="div"
      data-theme={theme}
      {...segmentProps}
    >
      <_Builtin.Block tag="div" {...titleStyle}>
        {title1}
      </_Builtin.Block>
    </_Component>
  );
}
