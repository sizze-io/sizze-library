import React from 'react';
import { InputComponent } from '../../devlink/InputComponent';
import { useTheme } from '../SzProvider';

export interface TextInputProps {
  style?: React.CSSProperties;
  click?: (...args: any[]) => void;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  theme?: string;
  value?: string | number;
  icon?: React.ReactNode;
  iconStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  onChangeValue?: (...args: any[]) => void;
  placeholder?: string;
}

export function SzTextInput({
  style,
  theme,
  click,
  onHover,
  leaveHover,
  value,
  icon,
  iconStyle,
  onChangeValue,
  placeholder,
  inputStyle,
}: TextInputProps) {
  const { themeDefault } = useTheme();
  return (
    <InputComponent
      inputStyle={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
      theme={theme ? theme : themeDefault}
      inputValue={{
        value: value,
        onChange: onChangeValue,
        placeholder: placeholder,
        style: inputStyle,
      }}
      iconStyle={{ style: iconStyle }}
      iconSlot={icon}
    />
  );
}
