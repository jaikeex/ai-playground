import React from 'react';
import { MainPage } from 'pages';
import './App.css';
import { Header } from 'components/molecules/Header';

export const App = () => (
  <main>
    <div className="main">
      <div className="gradient" />
    </div>
    <div className="app">
      <Header />
      <MainPage />
    </div>
  </main>
);
