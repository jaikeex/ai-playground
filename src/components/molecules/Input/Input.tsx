import React from 'react';
import { InputLabel } from 'components/atoms';

export type InputProps = {
  icon?: JSX.Element;
  label?: string;
} & React.ComponentProps<'input'>;

export const Input: React.FC<InputProps> = ({
  className = '',
  icon = null,
  id = '',
  label = '',
  type = 'text',
  ...props
}): JSX.Element => (
  <div className="relative w-full">
    {label ? <InputLabel htmlFor={id}>{label}</InputLabel> : null}
    {icon ? React.cloneElement(icon, { className: 'absolute left-3 top-3.5' }) : null}
    <input {...props} className={`input ${icon ? 'pl-10' : 'pl-4'} ${className}`} type={type} />
  </div>
);
