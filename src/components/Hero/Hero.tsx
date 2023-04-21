import React from 'react';
import logo from 'assets/logo.svg';

export const Hero: React.FC = (): JSX.Element => (
  <header className="w-full flex justify-center items-center flex-col">
    <nav className="w-full mb-10 pt-3 flex justify-between items-center">
      <img src={logo} alt="logo" className="w-28 object-contain" />
    </nav>
    <h1 className="text-center sm:text-6xl">
      Summarize Articles with <br /> <span className="orange_gradient">OpenAI GPT-4</span>
    </h1>
    <h2 className="desc">
      Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear
      and concise summaries
    </h2>
  </header>
);
