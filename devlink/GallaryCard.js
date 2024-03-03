import React from "react";
import * as _Builtin from "./_Builtin";

export function GallaryCard({
  as: _Component = _Builtin.Block,
  imageStyle = {},
  styleProps = {},
  theme,
  image = "https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65c83c6c9f2750d119b26724_Image.png",
}) {
  return (
    <_Component
      className="scrollcardhorizontall"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      <_Builtin.Block className="gallarycard" tag="div">
        <_Builtin.Image
          className="betta-image-cards"
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={image}
          {...imageStyle}
        />
      </_Builtin.Block>
    </_Component>
  );
}
