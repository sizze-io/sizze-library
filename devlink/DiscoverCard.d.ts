import * as React from "react";
import * as Types from "./types";

declare function DiscoverCard(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  styleProps?: Types.Devlink.RuntimeProps;
  theme?: Types.Builtin.Text;
  labelStyle?: Types.Devlink.RuntimeProps;
  labelText?: React.ReactNode;
  titleStyle?: Types.Devlink.RuntimeProps;
  subTitleStyle?: Types.Devlink.RuntimeProps;
  imageStyle?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
