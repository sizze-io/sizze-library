import * as React from "react";
import * as Types from "./types";

declare function GallaryCard(props: {
  as?: React.ElementType;
  imageStyle?: Types.Devlink.RuntimeProps;
  styleProps?: Types.Devlink.RuntimeProps;
  theme?: Types.Builtin.Text;
  image?: Types.Asset.Image;
}): React.JSX.Element;
