import * as React from "react";
import * as Types from "./types";

declare function SegmentControl(props: {
  as?: React.ElementType;
  title1?: React.ReactNode;
  title2?: React.ReactNode;
  slot?: Types.Devlink.Slot;
  theme?: Types.Builtin.Text;
  style?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
