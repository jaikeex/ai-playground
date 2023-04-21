import React from 'react';

export type ButtonProps = React.PropsWithChildren & React.ComponentProps<'button'>;

export const Button: React.FC<ButtonProps> = ({
  children = null,
  className = '',
  type = 'button',
  ...props
}): JSX.Element => (
  <button {...props} type={type} className={`btn ${className}`}>
    {children}
  </button>
);
