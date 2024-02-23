import React from "react";
import * as _Builtin from "./_Builtin";

export function SmalScrollCard({
  as: _Component = _Builtin.Block,
  title = "Name",
  subTitle = "Name",
  image = "https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65c83c6c9f2750d119b26724_Image.png",
  titleStyle = {},
  subTitleStyle = {},
  imageStyle = {},
  theme,
  styleProps = {},
}) {
  return (
    <_Component
      className="smalscrollcard"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      <_Builtin.Block className="div-block-32" tag="div">
        <_Builtin.Image
          className="image-small-card"
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={image}
          {...imageStyle}
        />
      </_Builtin.Block>
      <_Builtin.Block tag="div">
        <_Builtin.Block className="text-block-12" tag="div" {...titleStyle}>
          {title}
        </_Builtin.Block>
        <_Builtin.Block className="text-block-13" tag="div" {...subTitleStyle}>
          {subTitle}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
