import React from 'react';
import { WrapperGeneral } from '../../devlink/WrapperGeneral';
import { useTheme } from '../SzProvider';

export interface WrapperGeneralProps {
  style?: React.CSSProperties;
  theme?: string;
  slot?: React.ReactNode;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
}

export function SzWrapperGeneral({
  style,
  theme,
  slot,
  onHover,
  leaveHover,
  click,
}: WrapperGeneralProps) {
  const { themeDefault } = useTheme();
  return (
    <WrapperGeneral
      props={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
      theme={theme ? theme : themeDefault}
      slot={slot}
    />
  );
}
