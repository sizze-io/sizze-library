import * as React from "react";
import * as Types from "./types";

declare function DiscoverCard(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
}): React.JSX.Element;
