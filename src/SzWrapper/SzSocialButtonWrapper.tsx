import React from 'react';
import { Socials} from '../../devlink/Socials';
import { useTheme } from '../SzProvider';

export interface SocialWrapperProps {
  style?: React.CSSProperties;
  theme?: string;
  slot?: React.ReactNode;
  onHover?: (...args: any[]) => void;
  leaveHover?: (...args: any[]) => void;
  click?: (...args: any[]) => void;
}

export function SzSocialWrapper({
  style,
  theme,
  slot,
  onHover,
  leaveHover,
  click,
}: SocialWrapperProps) {
  const { themeDefault } = useTheme();
  return (
    <Socials
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
