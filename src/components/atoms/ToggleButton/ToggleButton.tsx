import React, { useCallback } from 'react';

export type ToggleButtonProps = {
  onClick?: (value: string) => void;
  toggled?: boolean;
  value: string;
} & React.PropsWithChildren;

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  toggled = false,
  children = null,
  value,
  onClick = () => {}
}): JSX.Element => {
  const defaultClasses = 'bg-white shadow-md active:shadow-sm dark:bg-slate-800';
  const toggledClasses = 'bg-orange-300 shadow-none text-black dark:bg-orange-400';

  const handleToggle = useCallback(() => {
    onClick(value);
  }, [onClick, value]);

  return (
    <button
      onClick={handleToggle}
      className={`py-3 px-6 flex  items-center justify-center rounded border border-slate-400 font-sans text-sm font-medium  uppercase active:shadow-sm transition-all will-change-transform  ${
        toggled ? toggledClasses : defaultClasses
      }`}
    >
      {children}
    </button>
  );
};
