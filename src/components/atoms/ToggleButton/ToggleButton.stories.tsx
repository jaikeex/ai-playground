import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ToggleButton, ToggleButtonProps } from './ToggleButton';

export default {
  title: 'ToggleButton',
  component: ToggleButton
} as Meta<typeof ToggleButton>;

const Template: StoryFn<ToggleButtonProps> = (args) => <ToggleButton {...args}>Toggle Button</ToggleButton>;

export const Default = Template.bind({});
Default.args = {
  value: 'toggle-button'
};

export const Toggled = Template.bind({});
Toggled.args = {
  ...Default.args,
  toggled: true
};
