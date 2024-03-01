import * as React from "react";
import * as Types from "./types";

declare function CradLarge(props: {
  as?: React.ElementType;
  labelTitle?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  image?: Types.Asset.Image;
  labelStyle?: Types.Devlink.RuntimeProps;
  description?: React.ReactNode;
  subTitleStyle?: Types.Devlink.RuntimeProps;
  titleStyle?: Types.Devlink.RuntimeProps;
  descriptionStyle?: Types.Devlink.RuntimeProps;
  imageStyle?: Types.Devlink.RuntimeProps;
  generalStyle?: Types.Devlink.RuntimeProps;
  theme?: Types.Builtin.Text;
  labelTextStyle?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
