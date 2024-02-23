import * as React from "react";
import * as Types from "./types";

declare function TitleRow(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  rightText?: Types.Visibility.VisibilityConditions;
  rightText?: React.ReactNode;
}): React.JSX.Element;
