import * as React from "react";
import * as Types from "./types";

declare function DetailPageComponent(props: {
  as?: React.ElementType;
  theme?: Types.Builtin.Text;
  styleProps?: Types.Devlink.RuntimeProps;
  image?: Types.Asset.Image;
  buttonsSlot?: Types.Devlink.Slot;
  generalSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
