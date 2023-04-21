import React from 'react';

export type ErrorTextProps = React.PropsWithChildren & React.ComponentProps<'p'>;

export const ErrorText: React.FC<ErrorTextProps> = ({ children = '', className = '', ...props }): JSX.Element => (
  <p {...props} className={`font-bold text-center text-xl text-red-500 ${className}`}>
    {children}
  </p>
);
