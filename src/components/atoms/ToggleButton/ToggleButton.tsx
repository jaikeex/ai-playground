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
  const toggledClasses = 'bg-orange-200 shadow-none hover:shadow-none';

  const handleToggle = useCallback(() => {
    onClick(value);
  }, [onClick]);

  return (
    <button
      onClick={handleToggle}
      className={`${
        toggled ? toggledClasses : ''
      } py-3 px-6 flex items-center justify-center rounded border border-slate-400 font-sans text-sm font-medium shadow-md uppercase active:shadow-sm transition-all will-change-transform `}
    >
      {children}
    </button>
  );
};
