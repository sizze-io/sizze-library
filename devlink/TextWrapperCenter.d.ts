import * as React from "react";
import * as Types from "./types";

declare function TextWrapperCenter(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  styleProps?: Types.Devlink.RuntimeProps;
  theme?: Types.Builtin.Text;
  titleStyle?: Types.Devlink.RuntimeProps;
  subTitleStyle?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
