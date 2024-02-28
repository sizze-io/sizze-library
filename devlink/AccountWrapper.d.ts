import * as React from "react";
import * as Types from "./types";

declare function AccountWrapper(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  theme?: Types.Builtin.Text;
  generalStyle?: Types.Devlink.RuntimeProps;
  name?: React.ReactNode;
  nameStyle?: Types.Devlink.RuntimeProps;
  email?: React.ReactNode;
  emailStyle?: Types.Devlink.RuntimeProps;
  rightIcon?: Types.Devlink.Slot;
  imageStyle?: Types.Devlink.RuntimeProps;
  rightClick?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
