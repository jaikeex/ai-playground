import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Link, LinkProps } from './Link';

export default {
  title: 'Atoms/Link',
  component: Link
} as Meta<typeof Link>;

const Template: StoryFn<LinkProps> = (args) => <Link {...args}>Take me somewhere!</Link>;

export const Default = Template.bind({});
Default.args = {
  href: '#'
};
Default.storyName = 'Link';
