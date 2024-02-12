import * as React from "react";
import * as Types from "./types";

declare function PaymentPlan(props: {
  as?: React.ElementType;
  period?: React.ReactNode;
  description?: React.ReactNode;
  price?: React.ReactNode;
}): React.JSX.Element;
