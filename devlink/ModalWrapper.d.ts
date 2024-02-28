import * as React from "react";
import * as Types from "./types";

declare function ModalWrapper(props: {
  as?: React.ElementType;
  theme?: Types.Builtin.Text;
  styleProps?: Types.Devlink.RuntimeProps;
  slot?: Types.Devlink.Slot;
}): React.JSX.Element;
