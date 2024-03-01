import React from "react";
import * as _Builtin from "./_Builtin";
import { SocalButton } from "./SocalButton";
import { FacebookIcon } from "./FacebookIcon";
import { AppleIcon } from "./AppleIcon";

export function Socials({
  as: _Component = _Builtin.Block,
  styleProps = {},
  theme,
  slot,
}) {
  return (
    <_Component
      className="socialmedia"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      {slot ?? (
        <>
          <SocalButton />
          <_Builtin.Block className="socialmediablock" tag="div">
            <_Builtin.Block className="wrappericon" tag="div">
              <FacebookIcon />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="socialmediablock" tag="div">
            <_Builtin.Block className="wrappericon" tag="div">
              <AppleIcon />
            </_Builtin.Block>
          </_Builtin.Block>
        </>
      )}
    </_Component>
  );
}
