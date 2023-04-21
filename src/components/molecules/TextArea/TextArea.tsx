import { InputLabel } from 'components/atoms';
import React from 'react';

export type TextAreaProps = { label?: string; } & React.ComponentProps<'textarea'>;

export const TextArea: React.FC<TextAreaProps> = ({ className, id = '', label = null, ...props }): JSX.Element => (
  <React.Fragment>
    {label ? <InputLabel htmlFor={id}>{label}</InputLabel> : null}
    <textarea
      {...props}
      className={`textarea transition-colors resize-none h-32 ${className}`}
      id={id}
      spellCheck={false}
    />
  </React.Fragment>
);
