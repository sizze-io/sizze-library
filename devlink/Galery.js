import React from "react";
import * as _Builtin from "./_Builtin";
import { GallaryCard } from "./GallaryCard";

export function Galery({
  as: _Component = _Builtin.Block,
  mainTitle = "Gallary",
  rightTitle = "See all",
  rightAction = {},
  theme,
  styleProps = {},
  mainTitleStyle = {},
  rightTitleStyle = {},
  slot,
}) {
  return (
    <_Component
      className="wrappergeneral"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      <_Builtin.Block tag="div">
        <_Builtin.Block className="titlerow" tag="div">
          <_Builtin.Block
            className="text-block-1-2rem"
            tag="div"
            {...mainTitleStyle}
          >
            {mainTitle}
          </_Builtin.Block>
          <_Builtin.Block tag="div" {...rightAction}>
            <_Builtin.Block tag="div" {...rightTitleStyle}>
              {rightTitle}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="srollblock" tag="div">
        {slot ?? (
          <>
            <GallaryCard />
            <GallaryCard />
            <GallaryCard />
          </>
        )}
      </_Builtin.Block>
    </_Component>
  );
}
