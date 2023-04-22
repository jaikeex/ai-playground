import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputLabel, InputLabelProps } from './InputLabel';

export default {
  title: 'Atoms/InputLabel',
  component: InputLabel
} as Meta<typeof InputLabel>;

const Template: StoryFn<InputLabelProps> = (args) => <InputLabel {...args}>Label</InputLabel>;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'InputLabel';
