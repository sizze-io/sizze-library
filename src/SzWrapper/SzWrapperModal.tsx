import React from 'react';
import { ModalWrapper } from '../../devlink/ModalWrapper';
import { useTheme } from '../SzProvider';

export interface WrapperModalProps {
  style?: React.CSSProperties;
  theme?: string;
  slot?: React.ReactNode;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
}

export function SzWrapperModal({
  style,
  theme,
  slot,
  onHover,
  leaveHover,
  click,
}: WrapperModalProps) {
  const { themeDefault } = useTheme();
  return (
    <ModalWrapper
      styleProps={{
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
