import * as React from "react";
import * as Types from "./types";

declare function ButtonPrimary(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  theme?: Types.Builtin.Text;
  buttonClick?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
