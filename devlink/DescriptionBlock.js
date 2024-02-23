import React from "react";
import * as _Builtin from "./_Builtin";

export function DescriptionBlock({
  as: _Component = _Builtin.Block,
  theme,
  styleProps = {},
}) {
  return (
    <_Component
      className="wrappergeneral"
      tag="div"
      data-theme={theme}
      {...styleProps}
    >
      <_Builtin.Block className="descriptionblock" tag="div">
        <_Builtin.Block className="text-block-1-2rem" tag="div">
          {"About"}
        </_Builtin.Block>
        <_Builtin.Block tag="div">
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
