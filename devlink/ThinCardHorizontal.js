import React from "react";
import * as _Builtin from "./_Builtin";
import { Checkbox } from "./Checkbox";

export function ThinCardHorizontal({
  as: _Component = _Builtin.Block,
  title = "4468 Desert Broom Court",
  subTitle = "Jersey City, NJ, 07306",
}) {
  return (
    <_Component className="thincardhorizontal" tag="div">
      <_Builtin.Block className="cardsmallicon" tag="div">
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65c83c6c9f2750d119b26724_Image.png"
        />
      </_Builtin.Block>
      <_Builtin.Block className="div-block-46" tag="div">
        <_Builtin.Block tag="div">
          <_Builtin.Block className="text-block-12" tag="div">
            {title}
          </_Builtin.Block>
          <_Builtin.Block className="text-block-13" tag="div">
            {subTitle}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="space16px" tag="div" />
      <Checkbox />
    </_Component>
  );
}