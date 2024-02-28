import React from "react";
import * as _Builtin from "./_Builtin";
import { DefaultIcon } from "./DefaultIcon";
import { IconRight } from "./IconRight";
import { Checkbox } from "./Checkbox";

export function RowSettings({
  as: _Component = _Builtin.Block,
  visibilityIconRight = true,
  visibilityIconLeft = true,
  text = "Profile",
  iconSlot,
  settingsItemClick = {},
  theme,
  rightIcon,
  subTextVisibility = true,
  subText = "Profile",
  checkboxVisibility = true,
  iconVisibility = true,
  subTextStyle = {},
  textStyle = {},
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
          className="div-block-5521367"
          id="w-node-_6a40035c-41c6-a008-ad35-10f3e95c510d-20567257"
          tag="div"
        >
          <_Builtin.Block
            className="text-block-6"
            id="w-node-efec6dc4-214e-f35f-2408-1c192056725a-20567257"
            tag="div"
            {...textStyle}
          >
            {text}
          </_Builtin.Block>
          {subTextVisibility ? (
            <_Builtin.Block className="subtext" tag="div" {...subTextStyle}>
              {subText}
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className="arrowright"
        id="w-node-efec6dc4-214e-f35f-2408-1c192056725c-20567257"
        tag="div"
      >
        {visibilityIconRight ? (
          <_Builtin.Block className="arrowright" tag="div">
            {rightIcon ?? (
              <>
                {iconVisibility ? (
                  <_Builtin.Block tag="div">
                    <IconRight />
                  </_Builtin.Block>
                ) : null}
                {checkboxVisibility ? (
                  <_Builtin.Block tag="div">
                    <Checkbox />
                  </_Builtin.Block>
                ) : null}
              </>
            )}
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
