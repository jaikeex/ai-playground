import { useCallback, useEffect } from 'react';

export const useScrollToElement = (elementId: string, trigger?: any) => {
  const scrollToElement = useCallback(() => {
    const targetElement = document.getElementById(elementId);

    if (!targetElement) {
      return;
    }

    const topPosition = targetElement.getBoundingClientRect().top;

    window.scrollTo({
      top: topPosition,
      behavior: 'smooth'
    });
  }, [elementId]);

  useEffect(() => {
    if (trigger) {
      scrollToElement();
    }
  }, [trigger, scrollToElement]);

  return scrollToElement;
};
