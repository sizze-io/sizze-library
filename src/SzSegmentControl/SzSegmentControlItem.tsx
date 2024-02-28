import React from 'react';
import { SegmentItem } from '../../devlink/SegmentItem';
import { useTheme } from '../SzProvider';

export interface SegmentControlItemProps {
  style?: React.CSSProperties;
  click?: (...args: any[]) => void;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  theme?: string;
  title?: string;
  titleStyle?: string;
}

export function SzSegmentControlItem({
  style,
  theme,
  click,
  onHover,
  leaveHover,
  title,
  titleStyle,
}: SegmentControlItemProps) {
  const { themeDefault } = useTheme();
  return (
    <SegmentItem
      title1={title}
      titleStyle={{style: titleStyle}}
      segmentProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
      theme={theme ? theme : themeDefault}
    />
  );
}
