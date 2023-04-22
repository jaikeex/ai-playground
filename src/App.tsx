import React from 'react';
import { MainPage } from 'pages';
import { Header } from 'components';
import { ThemeProvider } from 'theming';
import './App.css';

export const App = () => (
  <ThemeProvider>
    <main>
      <div className="app_background">
        <div className="gradient dark:hidden" />
      </div>
      <div className="app">
        <Header />
        <MainPage />
      </div>
    </main>
  </ThemeProvider>
);
