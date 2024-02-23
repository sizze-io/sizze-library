import React from "react";
import * as _Builtin from "./_Builtin";

export function PlaceHolderContent({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="placeholdercontent" tag="div">
      <_Builtin.Block className="insideplaceholder" tag="div">
        <_Builtin.Block className="textsize4 colorgray" tag="div">
          {"Content"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
