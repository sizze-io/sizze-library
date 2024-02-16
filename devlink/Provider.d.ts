import * as React from "react";
import * as Types from "./types";

declare function Provider(props: {
  as?: React.ElementType;
  theme?: Types.Builtin.Text;
  mainSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
