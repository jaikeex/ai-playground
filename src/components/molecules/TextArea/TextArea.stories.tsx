import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TextArea, TextAreaProps } from './TextArea';

export default {
  title: 'Molecules/TextArea',
  component: TextArea
} as Meta<typeof TextArea>;

const Template: StoryFn<TextAreaProps> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'This is a TextArea'
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...Default.args,
  label: 'TextArea label'
};
