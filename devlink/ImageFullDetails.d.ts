import * as React from "react";
import * as Types from "./types";

declare function ImageFullDetails(props: {
  as?: React.ElementType;
  imageSlot?: Types.Devlink.Slot;
  imageStyle?: Types.Devlink.RuntimeProps;
  styleProps?: Types.Devlink.RuntimeProps;
  theme?: Types.Builtin.Text;
  image?: Types.Asset.Image;
}): React.JSX.Element;
