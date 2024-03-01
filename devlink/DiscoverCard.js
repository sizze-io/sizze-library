import React from "react";
import * as _Builtin from "./_Builtin";

export function DiscoverCard({
  as: _Component = _Builtin.Block,
  image = "https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65c83c6c9f2750d119b26724_Image.png",
  title = "4468 Desert Broom Court",
  subTitle = "Jersey City, NJ, 07306",
  styleProps = {},
  theme,
  labelStyle = {},
  labelText = "Show",
  titleStyle = {},
  subTitleStyle = {},
  imageStyle = {},
  labelTextStyle = {},
}) {
  return (
    <_Component
      className="discovercard"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      <_Builtin.Block className="cardsmallicon" tag="div">
        <_Builtin.Image
          className="image-6"
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={image}
          {...imageStyle}
        />
      </_Builtin.Block>
      <_Builtin.Block className="wrapperbuttonandtext" tag="div">
        <_Builtin.Block className="wrappertextcard" tag="div">
          <_Builtin.Block className="text-block-12" tag="div" {...titleStyle}>
            {title}
          </_Builtin.Block>
          <_Builtin.Block
            className="text-block-13"
            tag="div"
            {...subTitleStyle}
          >
            {subTitle}
          </_Builtin.Block>
          <_Builtin.Block className="space12pxheight" tag="div" />
          <_Builtin.Block className="div-block-52" tag="div" />
        </_Builtin.Block>
        <_Builtin.Block className="labeldark" tag="div" {...labelStyle}>
          <_Builtin.Block
            className="text-block-10"
            tag="div"
            {...labelTextStyle}
          >
            {labelText}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
