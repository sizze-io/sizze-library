import React from 'react';
import { SegmentControl } from '../../devlink/SegmentControl';
import { useTheme } from '../SzProvider';

export interface SegmentControlProps {
  style?: React.CSSProperties;
  click?: (...args: any[]) => void;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  theme?: string;
  slot?: React.ReactNode;
}

export function SzSegmentControl({
  style,
  theme,
  click,
  onHover,
  leaveHover,
  slot,
}: SegmentControlProps) {
  const { themeDefault } = useTheme();
  return (
    <SegmentControl
      style={{
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
