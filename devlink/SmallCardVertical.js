import React from "react";
import * as _Builtin from "./_Builtin";

export function SmallCardVertical({
  as: _Component = _Builtin.Block,
  title = "Name card",
  subTitle = "This is some text ",
  image = "https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65c83c6c9f2750d119b26724_Image.png",
}) {
  return (
    <_Component className="smallcardvertical" tag="div">
      <_Builtin.Block className="div-block-33" tag="div">
        <_Builtin.Image
          className="image-2"
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={image}
        />
      </_Builtin.Block>
      <_Builtin.Block className="div-block-35" tag="div">
        <_Builtin.Block className="text-block-14" tag="div">
          {title}
        </_Builtin.Block>
        <_Builtin.Block className="text-block-15" tag="div">
          {subTitle}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="div-block-36" tag="div">
        <_Builtin.Block className="wrappericon" tag="div">
          <_Builtin.Block className="iconslot" tag="div">
            <_Builtin.HtmlEmbed
              className="uui-button-icon"
              data-theme=""
              value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2018L15%2012L9%206%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
