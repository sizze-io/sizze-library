import * as React from "react";
import * as Types from "./types";

declare function CartCard(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  image?: Types.Asset.Image;
  titleStyle?: Types.Devlink.RuntimeProps;
  subtitleStyle?: Types.Devlink.RuntimeProps;
  inputSlot?: Types.Devlink.Slot;
  imageStyle?: Types.Devlink.RuntimeProps;
  theme?: Types.Builtin.Text;
  styleProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
