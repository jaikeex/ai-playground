import React, { useCallback, useEffect, useState } from 'react';
import { useLazyGetSummaryQuery } from 'store';
import { GoLink } from 'react-icons/go';
import { Button, Card, ErrorText, Loader } from 'components/atoms';
import { FaRegCopy, FaCheck } from 'react-icons/fa';
import { Input } from 'components/molecules';
import { usePreviousArticles } from './usePreviousArticles';

export const Summarizer: React.FC = (): JSX.Element => {
  const [inputUrl, setInputUrl] = useState<string>('');
  const [summary, setSummary] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [previousArticles, setPreviousArticles] = usePreviousArticles();

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

  const handleCopy = useCallback(
    (copyUrl: string) => () => {
      setCopied(copyUrl);
      navigator.clipboard.writeText(copyUrl);
      setTimeout(() => setCopied(null), 3000);
    },
    [setCopied]
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
      {/* Search */}
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
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? <Loader /> : null}
        {error ? <ErrorText>Something went wrong :( please try again later!</ErrorText> : null}
        {summary ? (
          <div className="flex flex-col gap-3">
            <h4>Article Summary</h4>
            <Card>
              <p className="font-medium text-sm text-gray-700">{summary}</p>
            </Card>
          </div>
        ) : null}
      </div>
      {/* Browse History */}
      <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
        {previousArticles.reverse().map((item, index) => (
          <div key={`link-${index}`} onClick={() => setSummary(item.summary)} className="link_card">
            <div className="copy_btn" onClick={handleCopy(item.url)}>
              {copied === item.url ? <FaCheck /> : <FaRegCopy />}
            </div>
            <p className="flex-1  text-blue-700 font-medium text-sm truncate">{item.url}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
