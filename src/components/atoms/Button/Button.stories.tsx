import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Button';
