import * as React from "react";
import * as Types from "./types";

declare function RowSettings(props: {
  as?: React.ElementType;
  visibilityIconRight?: Types.Visibility.VisibilityConditions;
  visibilityIconLeft?: Types.Visibility.VisibilityConditions;
  text?: React.ReactNode;
}): React.JSX.Element;
