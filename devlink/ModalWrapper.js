import React from "react";
import * as _Builtin from "./_Builtin";
import { NavModal } from "./NavModal";
import { RowSettings } from "./RowSettings";

export function ModalWrapper({
  as: _Component = _Builtin.Block,
  theme,
  styleProps = {},
  slot,
}) {
  return (
    <_Component className="div-block-308" tag="div">
      <_Builtin.Block
        className="betta-modal-create-event long"
        tag="div"
        data-theme={theme}
        {...styleProps}
      >
        {slot ?? (
          <>
            <NavModal />
            <_Builtin.Block className="betta-wrapperstates" tag="div">
              <_Builtin.Block
                className="betta-wrappermodal"
                tag="div"
                data-theme=""
              >
                <_Builtin.Block
                  className="sectioninsidesettings"
                  tag="div"
                  data-theme=""
                >
                  <_Builtin.Block tag="div">{"Sort by"}</_Builtin.Block>
                  <_Builtin.Block className="rowsettings" tag="div">
                    <RowSettings
                      visibilityIconLeft={false}
                      visibilityIconRight={true}
                      text="Our picks"
                      subTextVisibility={false}
                      iconVisibility={false}
                    />
                    <RowSettings
                      visibilityIconLeft={false}
                      visibilityIconRight={true}
                      text="New items"
                      subTextVisibility={false}
                      iconVisibility={false}
                    />
                    <RowSettings
                      visibilityIconLeft={false}
                      visibilityIconRight={true}
                      text="Price"
                      subText="High to low"
                      iconVisibility={false}
                    />
                    <RowSettings
                      visibilityIconLeft={false}
                      visibilityIconRight={true}
                      text="Price"
                      subText="Low to high"
                      iconVisibility={false}
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="sectioninsidesettings"
                  tag="div"
                  data-theme=""
                >
                  <_Builtin.Block tag="div">{"Filter by"}</_Builtin.Block>
                  <_Builtin.Block className="rowsettings" tag="div">
                    <RowSettings
                      visibilityIconLeft={false}
                      visibilityIconRight={true}
                      subTextVisibility={false}
                      text="Brand"
                      checkboxVisibility={false}
                    />
                    <RowSettings
                      visibilityIconLeft={false}
                      visibilityIconRight={true}
                      subTextVisibility={false}
                      text="Categories"
                      checkboxVisibility={false}
                    />
                    <RowSettings
                      visibilityIconLeft={false}
                      visibilityIconRight={true}
                      subTextVisibility={false}
                      text="Colors"
                      checkboxVisibility={false}
                    />
                    <RowSettings
                      visibilityIconLeft={false}
                      visibilityIconRight={true}
                      subTextVisibility={false}
                      text="Price range"
                      checkboxVisibility={false}
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </>
        )}
      </_Builtin.Block>
    </_Component>
  );
}
