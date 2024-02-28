import React from "react";
import * as _Builtin from "./_Builtin";
import { ScrollCardHorizontallFull } from "./ScrollCardHorizontallFull";

export function VerticalGrid({
  as: _Component = _Builtin.Block,
  theme,
  styleProps = {},
  slot,
}) {
  return (
    <_Component className="grid2" tag="div" data-theme={theme} {...styleProps}>
      {slot ?? (
        <>
          <ScrollCardHorizontallFull
            image="https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65debca556ee0721458181aa_MENU_Umanoff_Pendant_Umanoff_Side_Table__Knitting_Chair_Planters_Wine_Rack_Houkime_Rug_03%201.png"
            title="KNITTING CHAIR, SHEEPSKIN"
            subTitle={
              <>
                {"Designer Ib Kofod-Larsen"}
                <br />
              </>
            }
          />
          <ScrollCardHorizontallFull
            image="https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65debd59eabb951dca541199_MENU_Offset_Sofa_Passage_Lounge_Table_Houkime_Rug_4%201.png"
            subTitle="Designer Norm Architects"
            title="OFFSET SOFAS"
          />
          <ScrollCardHorizontallFull
            title="TURNING TABLE"
            subTitle="Designer Theresa Rand"
            image="https://uploads-ssl.webflow.com/65c7ceb894cac5f5b3bec541/65debdcc2284a69587b04d26_MENU_AfteroomLoungeChair_TurningTable%201.png"
            stars={
              <>
                {"4.8"}
                <br />
              </>
            }
          />
        </>
      )}
    </_Component>
  );
}
