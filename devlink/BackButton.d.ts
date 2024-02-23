import * as React from "react";
import * as Types from "./types";

declare function BackButton(props: {
  as?: React.ElementType;
  styleProps?: Types.Devlink.RuntimeProps;
  iconSlot?: Types.Devlink.Slot;
  theme?: Types.Builtin.Text;
}): React.JSX.Element;
