import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Logo } from './Logo';

export default {
  title: 'Atoms/Logo',
  component: Logo
} as Meta<typeof Logo>;

const Template: StoryFn = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Logo';
