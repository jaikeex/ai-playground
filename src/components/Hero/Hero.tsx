import React from 'react';
import logo from 'assets/logo.svg';

export const Hero: React.FC = (): JSX.Element => (
  <div className="w-full flex justify-center items-center flex-col">
    <h1 className="text-center sm:text-6xl">
      <span className="orange_gradient">AI</span> Playground
    </h1>
    <h2 className="desc">
      Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear
      and concise summaries
    </h2>
  </div>
);
