import React, { useState, useCallback } from 'react';
import { FaLink } from 'react-icons/fa';

export const Demo: React.FC = (): JSX.Element => {
  const [inputUrl, setInputUrl] = useState<string>('');

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();
  }, []);

  const handleInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(event.target.value);
  }, []);

  return (
    <section className="w-full max-w-xl mt-16">
      <div className="flex flex-col w-full gap-2">
        <form className="relative flex justify-center items-center" onSubmit={handleSubmit}>
          <FaLink className="absolute left-0 my-2 ml-3 w-5" />
          <input
            type="url"
            className="url_input peer transition-colors"
            placeholder="Enter a URL"
            value={inputUrl}
            onChange={handleInput}
            required
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-slate-700 peer-focus:text-slate-700 transition-colors"
          >
            GO
          </button>
        </form>
        {/* HISTORY */}
      </div>
      {/* RESULTS */}
    </section>
  );
};
