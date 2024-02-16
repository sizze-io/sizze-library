import * as React from "react";
import * as Types from "./types";

declare function NavBar2(props: {
  as?: React.ElementType;
  mainText?: React.ReactNode;
  rightText?: React.ReactNode;
  leftText?: React.ReactNode;
  backIcon?: Types.Devlink.Slot;
  backClick?: Types.Devlink.RuntimeProps;
  rightClick?: Types.Devlink.RuntimeProps;
  style?: Types.Devlink.RuntimeProps;
  theme?: Types.Builtin.Text;
}): React.JSX.Element;
