import * as React from "react";
import * as Types from "./types";

declare function NumberInput(props: {
  as?: React.ElementType;
  value?: React.ReactNode;
  countDown?: Types.Devlink.RuntimeProps;
  countUp?: Types.Devlink.RuntimeProps;
  theme?: Types.Builtin.Text;
  styleProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
