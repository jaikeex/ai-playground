import { useEffect, useState } from 'react';

interface Article {
  url: string;
  summary: string;
}

type IUsePreviousArticles = [Article[], React.Dispatch<React.SetStateAction<Article[]>>];

export const usePreviousArticles = (): IUsePreviousArticles => {
  const [previousArticles, setPreviousArticles] = useState<Article[]>([]);

  useEffect(() => {
    /* @ts-ignore */
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'));

    if (articlesFromLocalStorage) {
      setPreviousArticles(articlesFromLocalStorage);
    }
  }, []);

  return [previousArticles, setPreviousArticles];
};
