import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Loader, LoaderProps } from './Loader';

export default {
  title: 'Loader',
  component: Loader
} as Meta<typeof Loader>;

const Template: StoryFn<LoaderProps> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};
