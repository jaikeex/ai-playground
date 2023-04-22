import { InputLabel } from 'components/atoms';
import React from 'react';

export type TextAreaProps = { height?: number; label?: string; } & React.ComponentProps<'textarea'>;

export const TextArea: React.FC<TextAreaProps> = ({
  className,
  id = '',
  height = 32,
  label = null,
  ...props
}): JSX.Element => (
  <React.Fragment>
    {label ? <InputLabel htmlFor={id}>{label}</InputLabel> : null}
    <textarea
      {...props}
      className={`textarea transition-colors resize-none h-${height} ${className}`}
      id={id}
      spellCheck={false}
    />
  </React.Fragment>
);
