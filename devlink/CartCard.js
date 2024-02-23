import React from "react";
import * as _Builtin from "./_Builtin";

export function CartCard({
  as: _Component = _Builtin.Block,
  title = "4468 Desert Broom Court",
  subTitle = "Jersey City, NJ, 07306",
  image = "https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65c83c6c9f2750d119b26724_Image.png",
}) {
  return (
    <_Component className="cartcard" tag="div">
      <_Builtin.Block className="cardsmallicon" tag="div">
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={image}
        />
      </_Builtin.Block>
      <_Builtin.Block className="div-block-46" tag="div">
        <_Builtin.Block tag="div">
          <_Builtin.Block className="text-block-12" tag="div">
            {title}
          </_Builtin.Block>
          <_Builtin.Block className="text-block-13" tag="div">
            {subTitle}
          </_Builtin.Block>
          <_Builtin.Block className="space12pxheight" tag="div" />
          <_Builtin.Block className="div-block-51" tag="div">
            <_Builtin.Block className="div-block-50" tag="div">
              <_Builtin.Block className="buttoncounty" tag="div">
                <_Builtin.Block className="wrappericon small" tag="div">
                  <_Builtin.Block className="iconslot" tag="div">
                    <_Builtin.HtmlEmbed
                      className="uui-button-icon"
                      data-theme=""
                      value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5%2012H19%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="county-text" tag="div">
                <_Builtin.Block className="text-block-18" tag="div">
                  {"1"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="buttoncounty" tag="div">
                <_Builtin.Block className="wrappericon small" tag="div">
                  <_Builtin.Block className="iconslot" tag="div">
                    <_Builtin.HtmlEmbed
                      className="uui-button-icon"
                      data-theme=""
                      value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%205V19M5%2012H19%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="space12pxheight" tag="div" />
          <_Builtin.Block className="div-block-52" tag="div" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
