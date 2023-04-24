import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

interface SummarizeError {
  data: {
    error: string;
  };
}

type Types = { error: string; };

export const isFetchBaseQueryError = (
  error: FetchBaseQueryError | SerializedError | undefined
): error is FetchBaseQueryError => {
  if (error === undefined) {
    return false;
  }
  return 'data' in error;
};

export const asSummarizeError = (data: unknown): SummarizeError => {
  const keyValidators: Record<keyof SummarizeError, Types> = {
    data: {
      error: 'string'
    }
  };
  if (typeof data === 'object' && data !== null) {
    const maybeA = data as SummarizeError;
    for (const key of Object.keys(keyValidators) as Array<keyof SummarizeError>) {
      if (typeof maybeA[key].error !== keyValidators[key].error) {
        throw new Error('data is not an A');
      }
    }
    return maybeA;
  }
  throw new Error('data is not an A');
};
