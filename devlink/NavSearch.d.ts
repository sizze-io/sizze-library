import * as React from "react";
import * as Types from "./types";

declare function NavSearch(props: {
  as?: React.ElementType;
  rightText?: React.ReactNode;
  rightTextStyle?: Types.Devlink.RuntimeProps;
  slot?: Types.Devlink.Slot;
  searchSlot?: Types.Devlink.Slot;
  theme?: Types.Builtin.Text;
  styleProps?: Types.Devlink.RuntimeProps;
  rightButton?: Types.Devlink.Slot;
}): React.JSX.Element;
