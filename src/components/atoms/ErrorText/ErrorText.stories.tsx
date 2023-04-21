import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ErrorText, ErrorTextProps } from './ErrorText';

export default {
  title: 'ErrorText',
  component: ErrorText
} as Meta<typeof ErrorText>;

const Template: StoryFn<ErrorTextProps> = (args) => (
  <ErrorText {...args}>Something went wrong :( please try again later!</ErrorText>
);

export const Default = Template.bind({});
Default.args = {};
