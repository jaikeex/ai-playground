import React from 'react';
import loader from 'assets/loader.svg';

export type LoaderProps = Omit<React.ComponentProps<'img'>, 'src'>;

export const Loader: React.FC<LoaderProps> = ({ className, ...props }): JSX.Element => (
  <img {...props} src={loader} alt="loader" className={`w-20 h-20 object-contain ${className}`} />
);
