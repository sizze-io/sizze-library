import * as React from "react";
import * as Types from "./types";

declare function ScrollCardHorizontallFull(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  stars?: React.ReactNode;
  starsSlot?: Types.Devlink.Slot;
  titleStyle?: Types.Devlink.RuntimeProps;
  subtitleStyle?: Types.Devlink.RuntimeProps;
  starsStyle?: Types.Devlink.RuntimeProps;
  theme?: Types.Builtin.Text;
  styleProps?: Types.Devlink.RuntimeProps;
  imageStyle?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
