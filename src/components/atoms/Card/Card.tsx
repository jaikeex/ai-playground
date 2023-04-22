import React from 'react';

export type CardProps = React.PropsWithChildren & React.ComponentProps<'div'>;

export const Card: React.FC<CardProps> = ({ children = null, className = '', ...props }): JSX.Element => (
  <div {...props} className={`card ${className}`}>
    {children}
  </div>
);
