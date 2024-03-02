import React from "react";
import * as _Builtin from "./_Builtin";
import { SearchIcon } from "./SearchIcon";

export function InputComponent({
  as: _Component = _Builtin.Block,
  theme,
  inputStyle = {},
  iconSlot,
  iconStyle = {},
  inputValue = {},
}) {
  return (
    <_Component
      className="wrappersearchinput"
      tag="div"
      data-theme={theme}
      {...inputStyle}
    >
      <_Builtin.FormTextInput
        className="batta-search-input"
        autoFocus={false}
        maxLength={256}
        name="Contact-01-name-2"
        data-name="Contact 01 Name 2"
        placeholder="Search"
        type="text"
        disabled={false}
        required={true}
        data-theme={theme}
        id="Contact-01-name-2"
        {...inputValue}
      />
      <_Builtin.Block className="div-block-5521363" tag="div" {...iconStyle}>
        {iconSlot ?? <SearchIcon />}
      </_Builtin.Block>
    </_Component>
  );
}
