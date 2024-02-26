import React from "react";
import * as _Builtin from "./_Builtin";
import { CartCard } from "./CartCard";

export function ShippingCard({
  as: _Component = _Builtin.Block,
  header = "3 items",
  headerStyle = {},
  slot,
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
      <_Builtin.Block tag="div">
        <_Builtin.Block className="titlerow" tag="div">
          <_Builtin.Block
            className="text-block-1-2rem"
            tag="div"
            {...headerStyle}
          >
            {header}
          </_Builtin.Block>
          <_Builtin.Block tag="div" />
        </_Builtin.Block>
        <_Builtin.Block className="div-block-54" tag="div">
          {slot ?? (
            <>
              <CartCard title="Kiki Armchair" subTitle="Green" />
              <CartCard title="Kiki Armchair" subTitle="Green" />
              <CartCard title="Kiki Armchair" subTitle="Green" />
            </>
          )}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
