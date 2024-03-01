import * as React from "react";
import * as Types from "./types";

declare function TextBlock(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  titleStyle?: Types.Devlink.RuntimeProps;
  subtitle?: React.ReactNode;
  subtitleStyle?: Types.Devlink.RuntimeProps;
  theme?: Types.Builtin.Text;
  styleProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
