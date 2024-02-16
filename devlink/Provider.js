import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonPrimary } from "./ButtonPrimary";
import { ButtonSecondary } from "./ButtonSecondary";
import { RowSettings } from "./RowSettings";

export function Provider({ as: _Component = _Builtin.Block, theme, mainSlot }) {
  return (
    <_Component className="iphoneblock" tag="div" data-theme={theme}>
      {mainSlot ?? (
        <>
          <_Builtin.Block className="wrapperstepsbutton" tag="div">
            <ButtonPrimary />
          </_Builtin.Block>
          <_Builtin.Block className="wrappergeneral" tag="div">
            <_Builtin.Block tag="div">
              <_Builtin.Block className="wrapperimageblock" tag="div">
                <_Builtin.Image
                  className="smallcoverimageblock"
                  id="w-node-_29d20e50-8968-7414-d7f7-593bf2fa7188-f2fa7182"
                  loading="lazy"
                  width="475"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65c83c6c9f2750d119b26724_Image.png"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="div-block-15" tag="div">
              <ButtonSecondary />
              <ButtonSecondary text="Listen" />
            </_Builtin.Block>
            <_Builtin.Block tag="div">
              <_Builtin.Block className="rowsettings" tag="div">
                <RowSettings />
                <RowSettings />
                <RowSettings />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </>
      )}
    </_Component>
  );
}
