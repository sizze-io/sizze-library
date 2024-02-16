import * as React from "react";
import * as Types from "./types";

declare function PaywallComponent(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  theme?: Types.Builtin.Text;
  styleProps?: Types.Devlink.RuntimeProps;
  titleStyle?: Types.Devlink.RuntimeProps;
  subTitleStyle?: Types.Devlink.RuntimeProps;
  payWallSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
