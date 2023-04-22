import React from 'react';

export type LinkProps = React.ComponentProps<'a'>;

export const Link: React.FC<LinkProps> = ({ children = null, className = '', ...props }): JSX.Element => (
  <a {...props} className={`transition-colors text-gray-600 hover:text-black ${className}`}>
    {children}
  </a>
);
