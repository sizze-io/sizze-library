import React from "react";
import * as _Builtin from "./_Builtin";
import { GallaryCard } from "./GallaryCard";

export function Galery({
  as: _Component = _Builtin.Block,
  mainTitle = "Gallary",
  rightTitle = "See all",
  rightAction = {},
  theme,
  styleProps = {},
  mainTitleStyle = {},
  rightTitleStyle = {},
  slot,
  image1Image = "https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65c83c6c9f2750d119b26724_Image.png",
  image2Image = "https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65c83c6c9f2750d119b26724_Image.png",
  image3Image = "https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65c83c6c9f2750d119b26724_Image.png",
}) {
  return (
    <_Component
      className="wrappergeneral"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      <_Builtin.Block tag="div">
        <_Builtin.Block className="titlerow" tag="div">
          <_Builtin.Block
            className="text-block-1-2rem"
            tag="div"
            {...mainTitleStyle}
          >
            {mainTitle}
          </_Builtin.Block>
          <_Builtin.Block tag="div" {...rightAction}>
            <_Builtin.Block tag="div" {...rightTitleStyle}>
              {rightTitle}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="srollblock" tag="div">
        {slot ?? (
          <>
            <GallaryCard image={image1Image} />
            <GallaryCard image={image2Image} />
            <GallaryCard image={image3Image} />
          </>
        )}
      </_Builtin.Block>
    </_Component>
  );
}
