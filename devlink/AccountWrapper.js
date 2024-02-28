import React from "react";
import * as _Builtin from "./_Builtin";
import { IconRight } from "./IconRight";

export function AccountWrapper({
  as: _Component = _Builtin.Block,
  image = "https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65cbe87f7067bed9c9108685_Avatar%20Image%207.png",
  theme,
  generalStyle = {},
  name = "Phoenix Baker",
  nameStyle = {},
  email = "baker@gmail.com",
  emailStyle = {},
  rightIcon,
  imageStyle = {},
  rightClick = {},
}) {
  return (
    <_Component
      className="accountwrapper"
      tag="div"
      data-theme={theme}
      {...generalStyle}
    >
      <_Builtin.Block className="imagewrapper" tag="div">
        <_Builtin.Image
          className="uui-blogpost05_author-image"
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={image}
          {...imageStyle}
        />
      </_Builtin.Block>
      <_Builtin.Block className="textblockwrapper" tag="div">
        <_Builtin.Block className="titletext" tag="div" {...nameStyle}>
          {name}
        </_Builtin.Block>
        <_Builtin.Block className="subtitletext" tag="div" {...emailStyle}>
          {email}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="arrowright" tag="div">
        <_Builtin.Block tag="div" {...rightClick}>
          {rightIcon ?? <IconRight />}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
