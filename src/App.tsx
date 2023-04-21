import React from 'react';
import './App.css';
import { Hero } from 'components/Hero';
import { Translator } from 'components/organisms/Translator';

export const App = () => (
  <main>
    <div className="main">
      <div className="gradient" />
    </div>
    <div className="app">
      <Hero />
      <Translator />
    </div>
  </main>
);
