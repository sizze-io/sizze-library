import * as React from "react";
import * as Types from "./types";

declare function SettingsInsideSection(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  settingsItemSlot?: Types.Devlink.Slot;
  theme?: Types.Builtin.Text;
  styleProps?: Types.Devlink.RuntimeProps;
  titleSettings?: Types.Devlink.RuntimeProps;
  textBlockVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
