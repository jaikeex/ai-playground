import React, { useCallback, useEffect, useState } from 'react';
import { useLazyGetSummaryQuery } from 'store';
import { GoLink } from 'react-icons/go';
import { Button, Card, ErrorText, Loader } from 'components/atoms';
import { Input, ClipboardCard } from 'components/molecules';
import { usePreviousArticles } from './usePreviousArticles';
import { useScrollToElement } from 'hooks';
import { isFetchBaseQueryError, asSummarizeError } from './utils';

export const Summarizer: React.FC = (): JSX.Element => {
  const [inputUrl, setInputUrl] = useState<string>('');
  const [summary, setSummary] = useState<string | null>(null);
  const [previousArticles, setPreviousArticles] = usePreviousArticles();
  useScrollToElement('article-summary', summary);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const existingArticle = previousArticles.find((item) => item.url === inputUrl);

      if (existingArticle) {
        setSummary(existingArticle.summary);
        return;
      }

      const { data } = await getSummary({ articleUrl: inputUrl });

      if (data && data.summary) {
        const newArticle = { url: inputUrl, summary: data.summary };
        const updatedPreviousArticles = [newArticle, ...previousArticles].slice(0, 2);

        setSummary(data.summary);
        setPreviousArticles(updatedPreviousArticles);
        localStorage.setItem('articles', JSON.stringify(updatedPreviousArticles));
      }
    },
    [setSummary, setPreviousArticles, previousArticles, getSummary, inputUrl]
  );

  const handleInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputUrl(event.target.value);
    },
    [setInputUrl]
  );

  const handlePreviousArticleClick = useCallback(
    (summary: string) => () => {
      setSummary(summary);
    },
    [setSummary]
  );

  useEffect(() => {
    /* @ts-ignore */
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'));

    if (articlesFromLocalStorage) {
      setPreviousArticles(articlesFromLocalStorage);
    }
  }, [setPreviousArticles]);

  return (
    <React.Fragment>
      {/* Form */}
      <div className="flex flex-col w-full gap-2">
        <form className="relative flex flex-col gap-4 justify-center items-center" onSubmit={handleSubmit}>
          <Input
            icon={<GoLink />}
            type="url"
            placeholder="Paste the article link"
            value={inputUrl}
            onChange={handleInput}
            required
          />
          <Button disabled={isFetching} type="submit">
            Summarize
          </Button>
        </form>
      </div>

      {/* Display Result */}
      <div id="article-summary" className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? <Loader /> : null}
        {error ? (
          <ErrorText>
            {isFetchBaseQueryError(error) ? asSummarizeError(error).data.error : 'Something went wrong :('}
          </ErrorText>
        ) : null}
        {summary ? (
          <div className="flex flex-col gap-3">
            <h4>Article Summary</h4>
            <Card>
              <p className="text-md text-gray-700 dark:text-gray-200">{summary}</p>
            </Card>
          </div>
        ) : null}
      </div>

      {/* Browse History */}
      <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
        {previousArticles.reverse().map((item, index) => (
          <ClipboardCard key={`link-${index}`} copyString={item.url} onClick={handlePreviousArticleClick(item.summary)}>
            {item.url}
          </ClipboardCard>
        ))}
      </div>
    </React.Fragment>
  );
};
