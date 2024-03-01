import React from "react";
import * as _Builtin from "./_Builtin";

export function TextBlock({
  as: _Component = _Builtin.Block,
  title = "Welcome",
  titleStyle = {},
  subtitle = "You can use your email or social media account to sign up",
  subtitleStyle = {},
  theme,
  styleProps = {},
}) {
  return (
    <_Component
      className="textblockcenter"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      <_Builtin.Block className="textwrapper shortwidth" tag="div">
        <_Builtin.Heading className="headerh4" tag="h3" {...titleStyle}>
          {title}
        </_Builtin.Heading>
        <_Builtin.Block tag="div" {...subtitleStyle}>
          {subtitle}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
