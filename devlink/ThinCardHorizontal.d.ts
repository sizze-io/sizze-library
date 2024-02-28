import * as React from "react";
import * as Types from "./types";

declare function ThinCardHorizontal(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  image?: Types.Asset.Image;
  imageStyle?: Types.Devlink.RuntimeProps;
  titleStyle?: Types.Devlink.RuntimeProps;
  subTitleStyle?: Types.Devlink.RuntimeProps;
  iconSlot?: Types.Devlink.Slot;
  theme?: Types.Builtin.Text;
  styleProps?: Types.Devlink.RuntimeProps;
  imageVisibility?: Types.Visibility.VisibilityConditions;
  wrapperIconVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
