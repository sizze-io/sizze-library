import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonSecondary } from "./ButtonSecondary";
import { SettingsInsideSection } from "./SettingsInsideSection";

export function DetailPageComponent({
  as: _Component = _Builtin.Block,
  theme,
  styleProps = {},
  image = "https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65c83c6c9f2750d119b26724_Image.png",
  buttonsSlot,
  generalSlot,
}) {
  return (
    <_Component
      className="wrappergeneral"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      <_Builtin.Block tag="div">
        <_Builtin.Block className="wrapperimageblock" tag="div">
          <_Builtin.Image
            className="smallcoverimageblock"
            id="w-node-ed37e54f-8822-207d-bfbf-06d549ef2c06-49ef2c03"
            loading="lazy"
            width="475"
            height="auto"
            alt=""
            src={image}
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="div-block-15" tag="div">
        {buttonsSlot ?? (
          <>
            <ButtonSecondary />
            <ButtonSecondary text="Listen" />
          </>
        )}
      </_Builtin.Block>
      <_Builtin.Block tag="div">
        {generalSlot ?? <SettingsInsideSection />}
      </_Builtin.Block>
    </_Component>
  );
}
