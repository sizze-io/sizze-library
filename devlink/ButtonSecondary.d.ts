import * as React from "react";
import * as Types from "./types";

declare function ButtonSecondary(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  theme?: Types.Builtin.Text;
  clickProps?: Types.Devlink.RuntimeProps;
  icon?: Types.Devlink.Slot;
}): React.JSX.Element;
