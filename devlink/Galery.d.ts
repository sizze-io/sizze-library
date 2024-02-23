import * as React from "react";
import * as Types from "./types";

declare function Galery(props: {
  as?: React.ElementType;
  mainTitle?: React.ReactNode;
  rightTitle?: React.ReactNode;
  rightAction?: Types.Devlink.RuntimeProps;
  theme?: Types.Builtin.Text;
  styleProps?: Types.Devlink.RuntimeProps;
  mainTitleStyle?: Types.Devlink.RuntimeProps;
  rightTitleStyle?: Types.Devlink.RuntimeProps;
  slot?: Types.Devlink.Slot;
}): React.JSX.Element;
