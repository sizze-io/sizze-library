import React from "react";
import * as _Builtin from "./_Builtin";

export function TextWrapperCenter({
  as: _Component = _Builtin.Block,
  title = "Name",
  subTitle = "Description",
  styleProps = {},
  theme,
  titleStyle = {},
  subTitleStyle = {},
}) {
  return (
    <_Component
      className="textwrapper center"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      <_Builtin.Heading className="headerh4" tag="h3" {...titleStyle}>
        {title}
      </_Builtin.Heading>
      <_Builtin.Block className="textsize4" tag="div" {...subTitleStyle}>
        {subTitle}
      </_Builtin.Block>
    </_Component>
  );
}
