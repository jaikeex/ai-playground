import React, { useCallback, useState } from 'react';
import { Card } from 'components/atoms';
import type { CardProps } from 'components/atoms';
import { FaCheck, FaRegCopy } from 'react-icons/fa';

export type ClipboardCardProps = {
  copyString?: string;
} & CardProps;

export const ClipboardCard: React.FC<ClipboardCardProps> = ({
  children = null,
  className = '',
  copyString = '',
  ...props
}): JSX.Element => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = useCallback(
    (copyUrl: string) => () => {
      setCopied(copyUrl);
      navigator.clipboard.writeText(copyUrl);
      setTimeout(() => setCopied(null), 3000);
    },
    [setCopied]
  );

  return (
    <Card {...props} className={`clipboard_card ${className}`}>
      <div className="copy_btn" onClick={handleCopy(copyString)}>
        {copied === copyString ? <FaCheck /> : <FaRegCopy />}
      </div>
      <p className="flex-1 text-blue-700 font-medium text-sm truncate dark:text-blue-300">{children}</p>
    </Card>
  );
};
