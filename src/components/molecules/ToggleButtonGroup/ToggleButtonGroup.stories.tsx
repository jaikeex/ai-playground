import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ToggleButtonGroup, ToggleButtonGroupProps } from './ToggleButtonGroup';
import { ToggleButton } from 'components/atoms/ToggleButton';

export default {
  title: 'ToggleButtonGroup',
  component: ToggleButtonGroup
} as Meta<typeof ToggleButtonGroup>;

const Template: StoryFn<ToggleButtonGroupProps> = (args) => (
  <ToggleButtonGroup {...args}>
    <ToggleButton value="tb-1">Toggle button 1</ToggleButton>
    <ToggleButton value="tb-2">Toggle button 2</ToggleButton>
    <ToggleButton value="tb-3">Toggle button 3</ToggleButton>
  </ToggleButtonGroup>
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: 'tb-2'
};
