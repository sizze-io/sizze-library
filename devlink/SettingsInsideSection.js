import React from "react";
import * as _Builtin from "./_Builtin";
import { RowSettings } from "./RowSettings";
import { StarIcon } from "./StarIcon";
import { PlanetIcon } from "./PlanetIcon";
import { AlertIcon } from "./AlertIcon";

export function SettingsInsideSection({
  as: _Component = _Builtin.Block,
  title = "General",
  settingsItemSlot,
  theme,
  styleProps = {},
  titleSettings = {},
}) {
  return (
    <_Component
      className="sectioninsidesettings"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      <_Builtin.Block tag="div" {...titleSettings}>
        {title}
      </_Builtin.Block>
      <_Builtin.Block className="rowsettings" tag="div">
        {settingsItemSlot ?? (
          <>
            <RowSettings visibilityIconLeft={true} visibilityIconRight={true} />
            <_Builtin.Block className="settingswrapperrow" tag="div">
              <_Builtin.Block className="wrappericon" tag="div">
                <StarIcon />
              </_Builtin.Block>
              <_Builtin.Block
                className="text-block-6"
                id="w-node-bc598409-72b6-93de-61f3-3a51327ee6ec-327ee6e4"
                tag="div"
              >
                {"Subscription"}
              </_Builtin.Block>
              <_Builtin.Block
                className="arrowright"
                id="w-node-bc598409-72b6-93de-61f3-3a51327ee6ee-327ee6e4"
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className="uui-button-icon is-icon-large"
                  id="w-node-bc598409-72b6-93de-61f3-3a51327ee6ef-327ee6e4"
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2018L15%2012L9%206%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="settingswrapperrow" tag="div">
              <_Builtin.Block className="wrappericon" tag="div">
                <PlanetIcon />
              </_Builtin.Block>
              <_Builtin.Block
                className="text-block-6"
                id="w-node-bc598409-72b6-93de-61f3-3a51327ee6f3-327ee6e4"
                tag="div"
              >
                {"Language"}
              </_Builtin.Block>
              <_Builtin.Block
                className="arrowright"
                id="w-node-bc598409-72b6-93de-61f3-3a51327ee6f5-327ee6e4"
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className="uui-button-icon is-icon-large"
                  id="w-node-bc598409-72b6-93de-61f3-3a51327ee6f6-327ee6e4"
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2018L15%2012L9%206%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="settingswrapperrow" tag="div">
              <_Builtin.Block className="wrappericon" tag="div">
                <AlertIcon />
              </_Builtin.Block>
              <_Builtin.Block
                className="text-block-6"
                id="w-node-bc598409-72b6-93de-61f3-3a51327ee6fa-327ee6e4"
                tag="div"
              >
                {"Notifications"}
              </_Builtin.Block>
              <_Builtin.Block
                className="arrowright"
                id="w-node-bc598409-72b6-93de-61f3-3a51327ee6fc-327ee6e4"
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className="uui-button-icon is-icon-large"
                  id="w-node-bc598409-72b6-93de-61f3-3a51327ee6fd-327ee6e4"
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2018L15%2012L9%206%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </>
        )}
      </_Builtin.Block>
    </_Component>
  );
}
