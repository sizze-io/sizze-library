import React, { FC } from 'react';
import { NavBar1 } from '../devlink/NavBar1';
import '../devlink/global.css';

export interface NavBarProps {
  text: string;
}

export const Sznavbar: FC<NavBarProps> = ({ text }) => {
  return <NavBar1 text={text} />;
};
