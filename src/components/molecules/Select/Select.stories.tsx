import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Select, SelectProps } from './Select';
import languages from 'utils/translation-languages';

export default {
  title: 'Molecules/Select',
  component: Select
} as Meta<typeof Select>;

const Template: StoryFn<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: languages
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...Default.args,
  label: 'Select language:'
};
