import React from 'react';

export type InputLabelProps = React.ComponentProps<'label'>;

export const InputLabel: React.FC<InputLabelProps> = ({ children = null, className = '', ...props }): JSX.Element => (
  <label {...props} className={`text-sm ${className}`}>
    {children}
  </label>
);
