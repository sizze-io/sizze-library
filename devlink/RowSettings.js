import React from "react";
import * as _Builtin from "./_Builtin";
import { DefaultIcon } from "./DefaultIcon";

export function RowSettings({
  as: _Component = _Builtin.Block,
  visibilityIconRight = true,
  visibilityIconLeft = true,
  text = "Profile",
  iconSlot,
  settingsItemClick = {},
  theme,
}) {
  return (
    <_Component
      className="settingswrapperrow"
      tag="div"
      data-theme={theme}
      {...settingsItemClick}
    >
      {visibilityIconLeft ? (
        <_Builtin.Block tag="div">
          {iconSlot ?? (
            <_Builtin.Block className="wrappericon small" tag="div">
              <DefaultIcon />
            </_Builtin.Block>
          )}
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
            <_Builtin.HtmlEmbed
              className="uui-button-icon is-icon-large"
              id="w-node-_05b5450e-effc-98ff-bc27-8f252f5ee6ed-20567257"
              value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2018L15%2012L9%206%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
