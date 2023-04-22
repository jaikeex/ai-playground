import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PageTitle, PageTitleProps } from './PageTitle';

export default {
  title: 'Atoms/PageTitle',
  component: PageTitle
} as Meta<typeof PageTitle>;

const Template: StoryFn<PageTitleProps> = (args) => (
  <PageTitle {...args}>
    Welcome to my multifunctional AI playground! Easily translate text, generate summaries of articles, and create
    images, all in one place!
  </PageTitle>
);

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'PageTitle';
