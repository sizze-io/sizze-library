import React from "react";
import * as _Builtin from "./_Builtin";
import { InputComponent } from "./InputComponent";

export function NavSearch({
  as: _Component = _Builtin.Block,
  rightText = "Cancel",
  rightTextStyle = {},
  slot,
  searchSlot,
  theme,
  styleProps = {},
  rightButton,
}) {
  return (
    <_Component
      className="navbar-1"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      <_Builtin.Block className="spaceforiphone" tag="div" />
      <_Builtin.Block className="headertopmodal space" tag="div">
        <_Builtin.Block className="div-block-5521370" tag="div">
          {searchSlot ?? <InputComponent />}
        </_Builtin.Block>
        <_Builtin.Block className="buttonclose" tag="div">
          {rightButton ?? (
            <_Builtin.Block tag="div" {...rightTextStyle}>
              {slot ?? rightText}
            </_Builtin.Block>
          )}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
