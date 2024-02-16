import * as React from "react";
import * as Types from "./types";

declare function SettingsSection(props: {
  as?: React.ElementType;
  settingsSlot?: Types.Devlink.Slot;
  theme?: Types.Builtin.Text;
  styleProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
