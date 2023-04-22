import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Input, InputProps } from './Input';
import { FaLink } from 'react-icons/fa';

export default {
  title: 'Input',
  component: Input
} as Meta<typeof Input>;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: <FaLink />
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...Default.args,
  label: 'Input label'
};
