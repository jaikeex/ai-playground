import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Translator } from './Translator';
import { Provider } from 'react-redux';
import { store } from 'store';

export default {
  title: 'Translator',
  component: Translator,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  ]
} as Meta<typeof Translator>;

const Template: StoryFn = (args) => <Translator {...args} />;

export const Default = Template.bind({});
Default.args = {};
