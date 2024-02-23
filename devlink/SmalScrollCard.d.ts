import * as React from "react";
import * as Types from "./types";

declare function SmalScrollCard(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  image?: Types.Asset.Image;
  titleStyle?: Types.Devlink.RuntimeProps;
  subTitleStyle?: Types.Devlink.RuntimeProps;
  imageStyle?: Types.Devlink.RuntimeProps;
  theme?: Types.Builtin.Text;
  styleProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
