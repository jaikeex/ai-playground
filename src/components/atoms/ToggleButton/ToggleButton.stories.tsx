import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ToggleButton, ToggleButtonProps } from './ToggleButton';

export default {
  title: 'Atoms/ToggleButton',
  component: ToggleButton
} as Meta<typeof ToggleButton>;

const Template: StoryFn<ToggleButtonProps> = (args) => <ToggleButton {...args}>Toggle Button</ToggleButton>;

export const Default = Template.bind({});
Default.args = {
  value: 'toggle-button'
};
Default.storyName = 'ToggleButton';
