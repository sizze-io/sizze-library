import React from "react";
import * as _Builtin from "./_Builtin";

export function SmallCardCircle({
  as: _Component = _Builtin.Block,
  title = "Name",
  subTitle = "Name",
  image = "https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65c83c6c9f2750d119b26724_Image.png",
}) {
  return (
    <_Component className="smallcardcircle" tag="div">
      <_Builtin.Block className="div-block-41" tag="div">
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={image}
        />
      </_Builtin.Block>
      <_Builtin.Block tag="div">
        <_Builtin.Block className="text-block-12-copy" tag="div">
          {title}
        </_Builtin.Block>
        <_Builtin.Block className="text-block-13-copy" tag="div">
          {subTitle}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
