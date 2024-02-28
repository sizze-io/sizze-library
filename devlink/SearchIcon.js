import React from "react";
import * as _Builtin from "./_Builtin";

export function SearchIcon({
  as: _Component = _Builtin.HtmlEmbed,
  iconProps = {},
  theme,
}) {
  return (
    <_Component
      className="iconsmall"
      data-theme={theme}
      value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M21%2021L15.0001%2015M17%2010C17%2013.866%2013.866%2017%2010%2017C6.13401%2017%203%2013.866%203%2010C3%206.13401%206.13401%203%2010%203C13.866%203%2017%206.13401%2017%2010Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
      {...iconProps}
    />
  );
}
