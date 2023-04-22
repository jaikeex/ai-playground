import React from 'react';
import logo from 'assets/logo.svg';

export const Logo: React.FC = (): JSX.Element => (
  <div className="flex items-center gap-1">
    <img src={logo} alt="logo" className="object-contain" />
    <span className="font-kalam">
      <span className="orange_gradient font-bold text-lg font-kalam">AI</span>playground
    </span>
  </div>
);
