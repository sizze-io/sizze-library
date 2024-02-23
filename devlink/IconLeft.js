import React from "react";
import * as _Builtin from "./_Builtin";

export function IconLeft({
  as: _Component = _Builtin.Block,
  theme,
  iconProps = {},
}) {
  return (
    <_Component
      className="iconslot"
      tag="div"
      data-theme={theme}
      {...iconProps}
    >
      <_Builtin.HtmlEmbed
        className="uui-button-icon"
        data-theme=""
        value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2022%2022%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M13.8451%2018.8541C14.0477%2019.0566%2014.3055%2019.1671%2014.6094%2019.1671C15.2171%2019.1671%2015.7051%2018.6883%2015.7051%2018.0806C15.7051%2017.7768%2015.5762%2017.5006%2015.3644%2017.2888L8.91908%2010.9908L15.3644%204.71122C15.5762%204.49944%2015.7051%204.21401%2015.7051%203.91937C15.7051%203.31167%2015.2171%202.83287%2014.6094%202.83287C14.3055%202.83287%2014.0477%202.94336%2013.8451%203.14593L6.68164%2010.1437C6.42383%2010.3831%206.30413%2010.6777%206.29492%2011C6.29492%2011.3223%206.42383%2011.5985%206.68164%2011.8471L13.8451%2018.8541Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
      />
    </_Component>
  );
}
