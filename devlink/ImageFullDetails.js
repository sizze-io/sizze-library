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
    </_Component>
  );
}
