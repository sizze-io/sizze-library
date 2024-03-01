import * as React from "react";
import * as Types from "./types";

declare function Divider(props: {
  as?: React.ElementType;
  theme?: Types.Builtin.Text;
  styleProps?: Types.Devlink.RuntimeProps;
  text?: React.ReactNode;
  textStyle?: Types.Devlink.RuntimeProps;
  lineColor?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
