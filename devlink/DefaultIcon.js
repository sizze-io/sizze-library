import React from "react";
import * as _Builtin from "./_Builtin";

export function DefaultIcon({
  as: _Component = _Builtin.Block,
  theme,
  iconProps = {},
}) {
  return (
    <_Component className="iconslot" tag="div">
      <_Builtin.HtmlEmbed
        className="uui-button-icon"
        data-theme={theme}
        value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%2022C17.5228%2022%2022%2017.5228%2022%2012C22%206.47715%2017.5228%202%2012%202C6.47715%202%202%206.47715%202%2012C2%2017.5228%206.47715%2022%2012%2022Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
        {...iconProps}
      />
    </_Component>
  );
}
