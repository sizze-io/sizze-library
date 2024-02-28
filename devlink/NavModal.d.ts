import * as React from "react";
import * as Types from "./types";

declare function NavModal(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  titleStyle?: Types.Devlink.RuntimeProps;
  theme?: Types.Builtin.Text;
  iconProps?: Types.Devlink.RuntimeProps;
  rightIcon?: Types.Devlink.Slot;
  styleProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
