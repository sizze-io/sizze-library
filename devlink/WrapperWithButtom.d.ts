import * as React from "react";
import * as Types from "./types";

declare function WrapperWithButtom(props: {
  as?: React.ElementType;
  buttonSlot?: Types.Devlink.Slot;
  title?: React.ReactNode;
  titileStyle?: Types.Devlink.RuntimeProps;
  subTitle?: React.ReactNode;
  subtitleStyle?: Types.Devlink.RuntimeProps;
  theme?: Types.Builtin.Text;
  styleProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
