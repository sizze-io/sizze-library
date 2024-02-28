import * as React from "react";
import * as Types from "./types";

declare function InputComponent(props: {
  as?: React.ElementType;
  theme?: Types.Builtin.Text;
  inputStyle?: Types.Devlink.RuntimeProps;
  iconSlot?: Types.Devlink.Slot;
  iconStyle?: Types.Devlink.RuntimeProps;
  inputValue?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
