import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Header } from './Header';

export default {
  title: 'Molecules/Header',
  component: Header
} as Meta<typeof Header>;

const Template: StoryFn = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Header';
