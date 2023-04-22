import { useEffect } from 'react';

export const useScrollToElement = (elementId: string, trigger?: any) => {
  const scrollToElement = () => {
    const targetElement = document.getElementById(elementId);

    if (!targetElement) {
      return;
    }

    const topPosition = targetElement.getBoundingClientRect().top;

    window.scrollTo({
      top: topPosition,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (trigger) {
      scrollToElement();
    }
  }, [trigger]);

  return scrollToElement;
};
