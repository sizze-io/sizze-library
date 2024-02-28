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
      <_Builtin.Block className="div-block-55" tag="div">
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
              <CartCard
                title="KNITTING CHAIR, SHEEPSKIN"
                subTitle="Designer Ib Kofod-Larsen"
                image="https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65debca556ee0721458181aa_MENU_Umanoff_Pendant_Umanoff_Side_Table__Knitting_Chair_Planters_Wine_Rack_Houkime_Rug_03%201.png"
              />
              <CartCard
                title="OFFSET SOFAS"
                subTitle="Designer Norm Architects"
                image="https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65debd59eabb951dca541199_MENU_Offset_Sofa_Passage_Lounge_Table_Houkime_Rug_4%201.png"
              />
              <CartCard
                title="TURNING TABLE"
                subTitle="Designer Theresa Rand"
                image="https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65debdcc2284a69587b04d26_MENU_AfteroomLoungeChair_TurningTable%201.png"
              />
            </>
          )}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
