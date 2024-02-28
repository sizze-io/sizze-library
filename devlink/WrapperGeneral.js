import React from "react";
import * as _Builtin from "./_Builtin";
import { SegmentControl } from "./SegmentControl";
import { VerticalGrid } from "./VerticalGrid";

export function WrapperGeneral({
  as: _Component = _Builtin.Block,
  slot,
  props = {},
  theme,
}) {
  return (
    <_Component
      className="wrappergeneral"
      tag="div"
      data-theme={theme}
      {...props}
    >
      {slot ?? (
        <>
          <SegmentControl title1="Manufacturers" title2="Designers" />
          <VerticalGrid />
        </>
      )}
    </_Component>
  );
}
