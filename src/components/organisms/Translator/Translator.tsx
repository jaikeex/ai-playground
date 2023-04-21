import React, { useCallback, useState } from 'react';
import { useLazyTranslateQuery } from 'store';
import languages, { findLaguageByValue } from 'utils/translation-languages';
import { Select, TextArea } from 'components/molecules';
import { Button, Loader } from 'components/atoms';
import { ErrorText } from 'components/atoms/ErrorText';

type Language = (typeof languages)[number]['value'];

export const Translator: React.FC = (): JSX.Element => {
  const [inputText, setInputText] = useState<string>('');
  const [targetLanguage, setTargetLanguage] = useState<Language>('en');
  const [translatedText, setTranslatedText] = useState<string | null>(null);
  const [detectedLanguage, setDetectedLanguage] = useState<string | null>(null);

  const [translate, { isFetching, error }] = useLazyTranslateQuery();

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      setTranslatedText(null);
      setDetectedLanguage(null);
      const { data } = await translate({ text: inputText, language: targetLanguage });

      if (data) {
        const detectedLanguageFromData = data.microsoft.original_response[0].detectedLanguage.language;

        setTranslatedText(data.microsoft.text);
        setDetectedLanguage(findLaguageByValue(detectedLanguageFromData));
      }
    },
    [inputText, targetLanguage, translate]
  );

  const handleInput = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInputText(event.target.value);
    },
    [setInputText]
  );

  const handleLanguageSelect = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setTargetLanguage(event.target.value as Language);
    },
    [setTargetLanguage]
  );

  return (
    <React.Fragment>
      <div className="flex flex-col w-full gap-2">
        <form className="relative flex flex-col gap-4 justify-center items-center" onSubmit={handleSubmit}>
          <TextArea
            placeholder="Text to translate (maximum 350 characters)"
            value={inputText}
            onChange={handleInput}
            maxLength={350}
            required
          />
          <Select
            options={languages}
            label="Target language:"
            name="language"
            id="language"
            onChange={handleLanguageSelect}
          />
          <Button disabled={isFetching} type="submit">
            TRANSLATE
          </Button>
        </form>
      </div>
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? <Loader /> : null}
        {error ? <ErrorText>Something went wrong :( please try again later!</ErrorText> : null}
        {translatedText ? (
          <div className="flex flex-col gap-3 min-w-full">
            <p className="text-sm">{`Detected language: ${detectedLanguage || 'Language could not be recognized'}`}</p>
            <div className="summary_box">
              <p>{translatedText}</p>
            </div>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};
