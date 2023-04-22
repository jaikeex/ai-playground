import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ThemeSwitchButton } from './ThemeSwitchButton';

export default {
  title: 'Atoms/ThemeSwitchButton',
  component: ThemeSwitchButton
} as Meta<typeof ThemeSwitchButton>;

const Template: StoryFn = (args) => <ThemeSwitchButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'ThemeSwitchButton';
