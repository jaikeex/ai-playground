import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ImageGenerator } from './ImageGenerator';
import { Provider } from 'react-redux';
import { store } from 'store';

export default {
  title: 'ImageGenerator',
  component: ImageGenerator,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  ]
} as Meta<typeof ImageGenerator>;

const Template: StoryFn = (args) => <ImageGenerator {...args} />;

export const Default = Template.bind({});
Default.args = {};
