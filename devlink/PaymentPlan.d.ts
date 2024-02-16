import * as React from "react";
import * as Types from "./types";

declare function PaymentPlan(props: {
  as?: React.ElementType;
  period?: React.ReactNode;
  description?: React.ReactNode;
  price?: React.ReactNode;
  theme?: Types.Builtin.Text;
  styleProps?: Types.Devlink.RuntimeProps;
  labelStyle?: Types.Devlink.RuntimeProps;
  descriptionStyle?: Types.Devlink.RuntimeProps;
  priceStyle?: Types.Devlink.RuntimeProps;
  iconSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
