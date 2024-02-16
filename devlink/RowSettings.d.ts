import * as React from "react";
import * as Types from "./types";

declare function RowSettings(props: {
  as?: React.ElementType;
  visibilityIconRight?: Types.Visibility.VisibilityConditions;
  visibilityIconLeft?: Types.Visibility.VisibilityConditions;
  text?: React.ReactNode;
  iconSlot?: Types.Devlink.Slot;
  settingsItemClick?: Types.Devlink.RuntimeProps;
  theme?: Types.Builtin.Text;
}): React.JSX.Element;
