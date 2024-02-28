import * as React from "react";
import * as Types from "./types";

declare function SegmentItem(props: {
  as?: React.ElementType;
  title1?: React.ReactNode;
  segmentProps?: Types.Devlink.RuntimeProps;
  titleStyle?: Types.Devlink.RuntimeProps;
  theme?: Types.Builtin.Text;
}): React.JSX.Element;
