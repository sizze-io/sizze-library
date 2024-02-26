import * as React from "react";
import * as Types from "./types";

declare function OrderWrapper(props: {
  as?: React.ElementType;
  buttonSlot?: Types.Devlink.Slot;
  subtotalPrice?: Types.Devlink.RuntimeProps;
  subtotalPriceText?: React.ReactNode;
  shippingPrice?: Types.Devlink.RuntimeProps;
  shippingPriceText?: React.ReactNode;
  title?: Types.Devlink.RuntimeProps;
  titleText?: React.ReactNode;
  priceStyle?: Types.Devlink.RuntimeProps;
  price?: React.ReactNode;
  theme?: Types.Builtin.Text;
  styelProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
