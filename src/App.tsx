import React from 'react';
import { MainPage } from 'pages';
import './App.css';
import { Header } from 'components/molecules/Header';
import { ThemeProvider } from 'theming/ThemeProvider';

export const App = () => (
  <ThemeProvider>
    <main>
      <div className="main_test">
        <div className="gradient dark:hidden" />
      </div>
      <div className="app">
        <Header />
        <MainPage />
      </div>
    </main>
  </ThemeProvider>
);
