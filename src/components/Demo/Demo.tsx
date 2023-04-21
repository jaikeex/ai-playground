import React, { useState, useCallback } from 'react';
import { useLazyTranslateQuery } from 'store';
import loader from 'assets/loader.svg';
import languages, { findLaguageByValue } from 'utils/translation-languages';
import { FaChevronDown } from 'react-icons/fa';

type Language = (typeof languages)[number]['value'];

export const Demo: React.FC = (): JSX.Element => {
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
    [inputText, targetLanguage, translate, findLaguageByValue]
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
    <section className="w-full max-w-xl mt-16">
      <div className="flex flex-col w-full gap-2">
        <form className="relative flex flex-col gap-4 justify-center items-center" onSubmit={handleSubmit}>
          <textarea
            className="url_input peer transition-colors resize-none h-32"
            placeholder="Text to translate (maximum 350 characters)"
            value={inputText}
            onChange={handleInput}
            maxLength={350}
            spellCheck={false}
            required
          />
          <div className="w-full relative">
            <label htmlFor="language" className="text-sm">
              Target language:
            </label>
            <select
              name="language"
              id="language"
              onChange={handleLanguageSelect}
              className="bg-white border border-gray-200 text-sm shadow-lg rounded-md font-medium focus:ring-blue-500 focus:border-black block w-full p-2.5 mt-1 appearance-none"
              style={{
                backgroundImage: 'none'
              }}
            >
              {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-11" fontSize={14} />
          </div>
          <button
            disabled={isFetching}
            type="submit"
            className="submit_btn peer-focus:border-slate-700 peer-focus:text-slate-700 transition-colors flex items-center justify-center"
          >
            TRANSLATE
          </button>
        </form>
        {/* HISTORY */}
      </div>
      {/* RESULTS */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? <img src={loader} alt="loader" className="w-20 h-20 object-contain" /> : null}
        {error ? <p className="font-bold text-center">Something went wrong :( please try again later!</p> : null}
        {translatedText ? (
          <div className="flex flex-col gap-3 min-w-full">
            <p className="text-sm">{`Detected language: ${detectedLanguage || 'Language could not be recognized'}`}</p>
            <div className="summary_box">
              <p>{translatedText}</p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};
