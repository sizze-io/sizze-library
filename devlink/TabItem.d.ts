import * as React from "react";
import * as Types from "./types";

declare function TabItem(props: {
  as?: React.ElementType;
  tabText?: React.ReactNode;
  tabIcon?: Types.Devlink.Slot;
  tabClick?: Types.Devlink.RuntimeProps;
  theme?: Types.Builtin.Text;
}): React.JSX.Element;
