import React from 'react';
import { NavSearch } from '../../devlink/NavSearch';
import { useTheme } from '../SzProvider';

export interface SzNavSearchProps {
  rightText?: string;
  rightTextStyle?: React.CSSProperties;
  rightIcon?: React.ReactNode;
  searchSlot?: React.ReactNode;
  style?: React.CSSProperties;
  theme?: string;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
  rightClick?: (...args: any[]) => void;
}

export function SzNavSearch({
  rightText,
  rightTextStyle,
  theme,
  rightIcon,
  searchSlot,
  style,
  onHover,
  leaveHover,
  click,
  rightClick,
}: SzNavSearchProps) {
  const { themeDefault } = useTheme();
  return (
    <NavSearch
      theme={theme ? theme : themeDefault}
      rightText={rightText}
      rightTextStyle={{ style: rightTextStyle, onClick: rightClick }}
      rightButton={rightIcon}
      searchSlot={searchSlot}
      styleProps={{
        style: style,
        onMouseEnter: onHover,
        onMouseLeave: leaveHover,
        onClick: click,
      }}
    />
  );
}
