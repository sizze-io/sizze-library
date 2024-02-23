import * as React from "react";
import * as Types from "./types";

declare function SmallCardCircle(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  image?: Types.Asset.Image;
}): React.JSX.Element;
