import React from "react";
import * as _Builtin from "./_Builtin";
import { DefaultIcon } from "./DefaultIcon";
import { IconRight } from "./IconRight";

export function RowSettings({
  as: _Component = _Builtin.Block,
  visibilityIconRight = true,
  visibilityIconLeft = true,
  text = "Profile",
  iconSlot,
  settingsItemClick = {},
  theme,
  rightIcon,
}) {
  return (
    <_Component
      className="settingswrapperrow"
      tag="div"
      data-theme={theme}
      {...settingsItemClick}
    >
      {visibilityIconLeft ? (
        <_Builtin.Block className="wrappericon small" tag="div">
          {iconSlot ?? <DefaultIcon />}
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block
        className="wrappertextsettings"
        id="w-node-_99a3e4ae-7794-3831-9c20-1744d0eeddb0-20567257"
        tag="div"
      >
        <_Builtin.Block
          className="text-block-6"
          id="w-node-efec6dc4-214e-f35f-2408-1c192056725a-20567257"
          tag="div"
        >
          {text}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className="arrowright"
        id="w-node-efec6dc4-214e-f35f-2408-1c192056725c-20567257"
        tag="div"
      >
        {visibilityIconRight ? (
          <_Builtin.Block className="arrowright" tag="div">
            {rightIcon ?? <IconRight />}
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
