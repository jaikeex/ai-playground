import React from 'react';
import { InputLabel } from 'components/atoms';
import { FaChevronDown } from 'react-icons/fa';

interface Option {
  value: string;
  label: string;
}

export type SelectProps = { label?: string; options: readonly Option[]; } & React.ComponentProps<'select'>;

export const Select: React.FC<SelectProps> = ({
  className = '',
  id = '',
  label = '',
  options = [],
  ...props
}): JSX.Element => (
  <div className={`w-full relative ${className}`}>
    {label ? <InputLabel htmlFor={id}>{label}</InputLabel> : null}
    <select
      {...props}
      id={id}
      className="select"
      style={{
        backgroundImage: 'none'
      }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <FaChevronDown className={`absolute right-3 ${label ? 'top-11' : 'top-4'}`} fontSize={14} />
  </div>
);
