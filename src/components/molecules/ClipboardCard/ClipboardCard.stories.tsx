import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ClipboardCard, ClipboardCardProps } from './ClipboardCard';

export default {
  title: 'Molecules/ClipboardCard',
  component: ClipboardCard
} as Meta<typeof ClipboardCard>;

const Template: StoryFn<ClipboardCardProps> = (args) => (
  <ClipboardCard {...args}>
    https://www.businessinsider.com/desantis-disney-feud-2024-republicans-response-trump-florida-wdw-mickey-2023-4
  </ClipboardCard>
);

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'ClipboardCard';
