import { useState, useEffect, useCallback } from 'react';

export const useRateLimiter = (limit: number, interval: number) => {
  const [count, setCount] = useState(0);
  const [limitReached, setLimitReached] = useState(false);

  useEffect(() => {
    const storedTimestamp = localStorage.getItem('rateLimiterTimestamp');
    const storedCount = localStorage.getItem('rateLimiterCount');

    if (storedTimestamp && storedCount) {
      const timeElapsed = Date.now() - Number(storedTimestamp);
      if (timeElapsed < interval) {
        setCount(Number(storedCount));
        setLimitReached(Number(storedCount) >= limit);
      } else {
        localStorage.removeItem('rateLimiterTimestamp');
        localStorage.removeItem('rateLimiterCount');
      }
    }
  }, [interval, limit]);

  const increment = useCallback(() => {
    if (!limitReached) {
      const newCount = count + 1;
      setCount(newCount);
      localStorage.setItem('rateLimiterTimestamp', String(Date.now()));
      localStorage.setItem('rateLimiterCount', String(newCount));

      if (newCount >= limit) {
        setLimitReached(true);
      }
    }
  }, [count, limitReached, setCount, setLimitReached, limit]);

  return { limitReached, increment };
};
