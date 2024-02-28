import React from "react";
import * as _Builtin from "./_Builtin";
import { IconLocation } from "./IconLocation";
import { Checkbox } from "./Checkbox";

export function ThinCardHorizontal({
  as: _Component = _Builtin.Block,
  title = "4468 Desert Broom Court",
  subTitle = "Jersey City, NJ, 07306",
  image = "https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65c83c6c9f2750d119b26724_Image.png",
  imageStyle = {},
  titleStyle = {},
  subTitleStyle = {},
  iconSlot,
  theme,
  styleProps = {},
  imageVisibility = true,
  wrapperIconVisibility = true,
}) {
  return (
    <_Component
      className="thincardhorizontal"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      <_Builtin.Block className="cardsmallicon" tag="div">
        {imageVisibility ? (
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src={image}
            {...imageStyle}
          />
        ) : null}
        {wrapperIconVisibility ? (
          <_Builtin.Block className="wrappericon" tag="div">
            <IconLocation />
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
      <_Builtin.Block className="div-block-46" tag="div">
        <_Builtin.Block tag="div">
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
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block tag="div">{iconSlot ?? <Checkbox />}</_Builtin.Block>
    </_Component>
  );
}
