import type { ToggleButtonProps } from 'components/atoms/ToggleButton';
import React, { useCallback, useMemo, useState } from 'react';

export type ToggleButtonGroupProps = {
  defaultValue?: string;
  onChange?: (value: string) => void;
} & React.PropsWithChildren;

export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
  children = null,
  defaultValue = '',
  onChange = () => {}
}): JSX.Element => {
  const [activeButton, setActiveButton] = useState<string | null>(defaultValue);

  const handleButtonClick = useCallback(
    (value: string) => {
      setActiveButton(value);
      onChange(value);
    },
    [setActiveButton, onChange]
  );

  const childrenWithProps = useMemo(() => {
    if (!Array.isArray(children)) {
      return children;
    }

    return React.Children.map(children, (child: React.ReactElement<ToggleButtonProps>) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          toggled: activeButton === child.props.value,
          onClick: handleButtonClick
        });
      }
    });
  }, [handleButtonClick, children, activeButton]);

  return <div className="flex justify-center items-center gap-4">{childrenWithProps}</div>;
};
