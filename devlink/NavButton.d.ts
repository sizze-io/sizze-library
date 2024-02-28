import * as React from "react";
import * as Types from "./types";

declare function NavButton(props: {
  as?: React.ElementType;
  iconProps?: Types.Devlink.RuntimeProps;
  theme?: Types.Builtin.Text;
  buttonProps?: Types.Devlink.RuntimeProps;
  slot?: Types.Devlink.Slot;
}): React.JSX.Element;
