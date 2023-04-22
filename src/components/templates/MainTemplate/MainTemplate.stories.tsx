import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MainTemplate, MainTemplateProps } from './MainTemplate';
import { Provider } from 'react-redux';
import { store } from 'store';

export default {
  title: 'MainTemplate',
  component: MainTemplate,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  ]
} as Meta<typeof MainTemplate>;

const Template: StoryFn<MainTemplateProps> = (args) => <MainTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {};
