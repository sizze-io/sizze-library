import React from "react";
import * as _Builtin from "./_Builtin";
import { SettingsInsideSection } from "./SettingsInsideSection";
import { HelpIcon } from "./HelpIcon";
import { FeedbackIcon } from "./FeedbackIcon";
import { DeleteAccountIcon } from "./DeleteAccountIcon";
import { LogoutIcon } from "./LogoutIcon";

export function SettingsSection({
  as: _Component = _Builtin.Block,
  settingsSlot,
  theme,
  styleProps = {},
}) {
  return (
    <_Component
      className="settingssection"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      {settingsSlot ?? (
        <>
          <SettingsInsideSection />
          <_Builtin.Block className="sectioninsidesettings" tag="div">
            <_Builtin.Block tag="div">{"Support"}</_Builtin.Block>
            <_Builtin.Block className="rowsettings" tag="div">
              <_Builtin.Block className="settingswrapperrow" tag="div">
                <_Builtin.Block className="wrappericon" tag="div">
                  <HelpIcon />
                </_Builtin.Block>
                <_Builtin.Block
                  className="text-block-6"
                  id="w-node-_798c00bb-0cff-9bf3-0ade-35c70150559a-01505578"
                  tag="div"
                >
                  {"Help center"}
                </_Builtin.Block>
                <_Builtin.Block
                  className="arrowright"
                  id="w-node-_798c00bb-0cff-9bf3-0ade-35c70150559c-01505578"
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className="uui-button-icon is-icon-large"
                    id="w-node-_798c00bb-0cff-9bf3-0ade-35c70150559d-01505578"
                    value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2018L15%2012L9%206%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="settingswrapperrow" tag="div">
                <_Builtin.Block className="wrappericon" tag="div">
                  <FeedbackIcon />
                </_Builtin.Block>
                <_Builtin.Block
                  className="text-block-6"
                  id="w-node-_798c00bb-0cff-9bf3-0ade-35c7015055a1-01505578"
                  tag="div"
                >
                  {"Send feedback "}
                </_Builtin.Block>
                <_Builtin.Block
                  className="arrowright"
                  id="w-node-_798c00bb-0cff-9bf3-0ade-35c7015055a3-01505578"
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className="uui-button-icon is-icon-large"
                    id="w-node-_798c00bb-0cff-9bf3-0ade-35c7015055a4-01505578"
                    value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2018L15%2012L9%206%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="sectioninsidesettings" tag="div">
            <_Builtin.Block tag="div">{"More"}</_Builtin.Block>
            <_Builtin.Block className="rowsettings" tag="div">
              <_Builtin.Block className="settingswrapperrow" tag="div">
                <_Builtin.Block className="wrappericon" tag="div">
                  <DeleteAccountIcon />
                </_Builtin.Block>
                <_Builtin.Block
                  className="text-block-6"
                  id="w-node-_798c00bb-0cff-9bf3-0ade-35c7015055ac-01505578"
                  tag="div"
                >
                  {"Delete account"}
                </_Builtin.Block>
                <_Builtin.Block
                  className="arrowright"
                  id="w-node-_798c00bb-0cff-9bf3-0ade-35c7015055ae-01505578"
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className="uui-button-icon is-icon-large"
                    id="w-node-_798c00bb-0cff-9bf3-0ade-35c7015055af-01505578"
                    value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2018L15%2012L9%206%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="settingswrapperrow" tag="div">
                <_Builtin.Block className="wrappericon" tag="div">
                  <LogoutIcon />
                </_Builtin.Block>
                <_Builtin.Block
                  className="text-block-6"
                  id="w-node-_798c00bb-0cff-9bf3-0ade-35c7015055b3-01505578"
                  tag="div"
                >
                  {"Log out"}
                </_Builtin.Block>
                <_Builtin.Block
                  className="arrowright"
                  id="w-node-_798c00bb-0cff-9bf3-0ade-35c7015055b5-01505578"
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className="uui-button-icon is-icon-large"
                    id="w-node-_798c00bb-0cff-9bf3-0ade-35c7015055b6-01505578"
                    value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2018L15%2012L9%206%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </>
      )}
    </_Component>
  );
}
