import React from "react";
import * as _Builtin from "./_Builtin";

export function CradLarge({
  as: _Component = _Builtin.Block,
  labelTitle = "Label",
  title = "Update the plan",
  subtitle = "Select a plan to subscribe to ",
  image = "https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65c83c6c9f2750d119b26724_Image.png",
  labelStyle = {},
  description = "COLLECTION",
  subTitleStyle = {},
  titleStyle = {},
  descriptionStyle = {},
  imageStyle = {},
  generalStyle = {},
  theme,
  labelTextStyle = {},
}) {
  return (
    <_Component
      className="cradlarge"
      tag="div"
      data-theme={theme}
      {...generalStyle}
    >
      <_Builtin.Block className="textblockcard" tag="div">
        <_Builtin.Block className="textwrapper" tag="div">
          <_Builtin.Block
            className="textsize4 white"
            tag="div"
            {...subTitleStyle}
          >
            {subtitle}
          </_Builtin.Block>
          <_Builtin.Block
            className="textsize4 white small"
            tag="div"
            {...descriptionStyle}
          >
            {description}
          </_Builtin.Block>
          <_Builtin.Heading className="headerh4 white" tag="h3" {...titleStyle}>
            {title}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block className="div-block-29" tag="div" {...labelStyle}>
          <_Builtin.Block
            className="textblocklabelwhite"
            tag="div"
            {...labelTextStyle}
          >
            {labelTitle}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Image
        className="image-3"
        loading="lazy"
        width="644"
        height="auto"
        alt=""
        src={image}
        {...imageStyle}
      />
      <_Builtin.Block className="div-block-5521369" tag="div" />
    </_Component>
  );
}
