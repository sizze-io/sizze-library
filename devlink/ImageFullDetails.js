import React from "react";
import * as _Builtin from "./_Builtin";

export function ImageFullDetails({
  as: _Component = _Builtin.Block,
  imageSlot,
  imageStyle = {},
  styleProps = {},
  theme,
  image = "https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65c83c6c9f2750d119b26724_Image.png",
}) {
  return (
    <_Component
      className="imagefulldetails"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      <_Builtin.Image
        className="imagefull"
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={image}
        {...imageStyle}
      />
      <_Builtin.Block className="variantscolors" tag="div">
        <_Builtin.Block className="text-block-16" tag="div">
          {"+3 colors"}
        </_Builtin.Block>
        <_Builtin.Block className="div-block-43" tag="div">
          <_Builtin.Block className="div-block-42" tag="div" />
          <_Builtin.Block className="div-block-42 second" tag="div" />
          <_Builtin.Block className="div-block-42 third" tag="div" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
