import React from 'react';
import logo from 'assets/logo.svg';

export const Header: React.FC = (): JSX.Element => (
  <header className="w-full mb-10 pt-3 flex justify-between items-center">
    <img src={logo} alt="logo" className="w-28 object-contain" />
  </header>
);
