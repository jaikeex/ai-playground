import React from 'react';
import { InputLabel } from 'components/atoms';

export type TextAreaProps = { label?: string; } & React.ComponentProps<'textarea'>;

export const TextArea: React.FC<TextAreaProps> = ({ className, id = '', label = null, ...props }): JSX.Element => (
  <React.Fragment>
    {label ? <InputLabel htmlFor={id}>{label}</InputLabel> : null}
    <textarea {...props} className={`textarea ${className}`} id={id} spellCheck={false} />
  </React.Fragment>
);
