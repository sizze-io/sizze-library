import React from 'react';
import { NumberInput } from '../../devlink/NumberInput';
import { useTheme } from '../SzProvider';

export interface NumberInputProps {
  style?: React.CSSProperties;
  click?: (...args: any[]) => void;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  theme?: string;
  value?: string;
  countDown?: (...args: any[]) => void;
  countUp?: (...args: any[]) => void;
  
}

export function SzNumberInput({
  style,
  theme,
  click,
  onHover,
  leaveHover,
  value,
  countDown,
  countUp
}: NumberInputProps) {
  const { themeDefault } = useTheme();
  return (
    <NumberInput
      styleProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
      theme={theme ? theme : themeDefault}
      value={value}
      countDown={{ onClick: countDown }}
      countUp={{ onClick: countUp }}
    />
  );
}
