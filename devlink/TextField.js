import React from "react";
import * as _Builtin from "./_Builtin";

export function TextField({ as: _Component = _Builtin.FormTextInput }) {
  return (
    <_Component
      className="textfield"
      autoFocus={false}
      maxLength={256}
      name="Email-2"
      data-name="Email 2"
      placeholder="Email"
      type="text"
      disabled={false}
      required={true}
      id="Email-2"
    />
  );
}
