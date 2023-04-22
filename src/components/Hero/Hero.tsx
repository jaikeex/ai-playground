import React from 'react';
import logo from 'assets/logo.svg';

export const Hero: React.FC = (): JSX.Element => (
  <div className="w-full flex justify-center items-center flex-col">
    <h1 className="text-center sm:text-6xl">
      <span className="orange_gradient">AI</span> Playground
    </h1>
    <h2 className="desc">
      Welcome to my multifunctional AI playground! Easily translate text, generate summaries of articles, and create
      images, all in one place!
    </h2>
  </div>
);
