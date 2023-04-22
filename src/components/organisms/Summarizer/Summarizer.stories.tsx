import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Summarizer } from './Summarizer';
import { Provider } from 'react-redux';
import { store } from 'store';

export default {
  title: 'Organisms/Summarizer',
  component: Summarizer,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  ]
} as Meta<typeof Summarizer>;

const Template: StoryFn = (args) => <Summarizer {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Summarizer';
