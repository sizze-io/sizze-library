import React from 'react';
import { NavBar1 } from '../devlink/NavBar1';
import '../devlink/global.css';

export interface NavBarProps {
  text: string;
}

export default function Sznavbar({ text }: NavBarProps) {
  return  <NavBar1 text={text} />;
}
