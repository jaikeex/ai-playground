import React from 'react';

export type ErrorTextProps = React.PropsWithChildren & React.ComponentProps<'p'>;

export const ErrorText: React.FC<ErrorTextProps> = ({ children = '', className = '', ...props }): JSX.Element => (
  <p {...props} className={`error_text ${className}`}>
    {children}
  </p>
);
