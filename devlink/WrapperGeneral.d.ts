import * as React from "react";
import * as Types from "./types";

declare function WrapperGeneral(props: {
  as?: React.ElementType;
  slot?: Types.Devlink.Slot;
  props?: Types.Devlink.RuntimeProps;
  theme?: Types.Builtin.Text;
}): React.JSX.Element;
