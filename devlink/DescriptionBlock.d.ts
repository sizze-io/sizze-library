import * as React from "react";
import * as Types from "./types";

declare function DescriptionBlock(props: {
  as?: React.ElementType;
  theme?: Types.Builtin.Text;
  styleProps?: Types.Devlink.RuntimeProps;
  description?: React.ReactNode;
}): React.JSX.Element;
