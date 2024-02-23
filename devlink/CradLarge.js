import React from "react";
import * as _Builtin from "./_Builtin";

export function CradLarge({
  as: _Component = _Builtin.Block,
  labelTitle = "Label",
  title = "Update the plan",
  subtitle = "Select a plan to subscribe to ",
}) {
  return (
    <_Component className="cradlarge" tag="div">
      <_Builtin.Image
        className="image-3"
        loading="lazy"
        width="644"
        height="auto"
        alt=""
        src="https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65c83c6c9f2750d119b26724_Image.png"
      />
      <_Builtin.Block className="textblockcard" tag="div">
        <_Builtin.Block className="textwrapper" tag="div">
          <_Builtin.Heading className="headerh4 white" tag="h3">
            {title}
          </_Builtin.Heading>
          <_Builtin.Block className="textsize4 white" tag="div">
            {subtitle}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="div-block-29" tag="div">
          <_Builtin.Block className="text-block-10" tag="div">
            {labelTitle}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
