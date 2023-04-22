import React from 'react';
import { withThemeByClassName } from '@storybook/addon-styling';
import '../src/App.css';
import { StoryFn } from '@storybook/react';

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark'
    },
    defaultTheme: 'light'
  }),
  (Story: StoryFn) => (
    <main>
      <div className="app_background">
        <div className="gradient dark:hidden" />
      </div>
      <div className="app flex flex-col items-center">
        <Story />
      </div>
    </main>
  )
];

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
