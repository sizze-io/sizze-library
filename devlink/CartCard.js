import React from "react";
import * as _Builtin from "./_Builtin";
import { NumberInput } from "./NumberInput";

export function CartCard({
  as: _Component = _Builtin.Block,
  title = "4468 Desert Broom Court",
  subTitle = "Jersey City, NJ, 07306",
  image = "https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65c83c6c9f2750d119b26724_Image.png",
  titleStyle = {},
  subtitleStyle = {},
  inputSlot,
  imageStyle = {},
  theme,
  styleProps = {},
  price = "$1,278",
  priceStyle = {},
}) {
  return (
    <_Component
      className="cartcard"
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
      <_Builtin.Block className="div-block-46" tag="div">
        <_Builtin.Block tag="div">
          <_Builtin.Block className="text-block-12" tag="div" {...titleStyle}>
            {title}
          </_Builtin.Block>
          <_Builtin.Block
            className="text-block-13"
            tag="div"
            {...subtitleStyle}
          >
            {subTitle}
          </_Builtin.Block>
          <_Builtin.Block className="space12pxheight" tag="div" />
          <_Builtin.Block className="div-block-51" tag="div">
            {inputSlot ?? (
              <>
                <NumberInput />
                <_Builtin.Block
                  className="text-block-175"
                  tag="div"
                  {...priceStyle}
                >
                  {price}
                </_Builtin.Block>
              </>
            )}
          </_Builtin.Block>
          <_Builtin.Block className="space12pxheight" tag="div" />
          <_Builtin.Block className="div-block-52" tag="div" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
