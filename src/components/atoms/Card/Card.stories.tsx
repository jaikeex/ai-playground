import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Card, CardProps } from './Card';

export default {
  title: 'Card',
  component: Card
} as Meta<typeof Card>;

const Template: StoryFn<CardProps> = (args) => (
  <Card {...args}>
    <p className="font-medium text-sm text-gray-700">
      Florida Governor Ron DeSantis' feud with Disney is drawing criticism from fellow Republicans, including former
      Vice President Mike Pence, former New Jersey Governor Chris Christie, New Hampshire Governor Chris Sununu, and
      allies of former UN Ambassador Nikki Haley. DeSantis has been needling the entertainment giant, but his potential
      challengers see his actions as apostasy for the limited government at the core of conservatism. Despite DeSantis'
      attempts to burnish his national image by torching Disney, the company remains a focal point of American culture
      and is the top studio in Hollywood, the top theme park in the world, and virtually inescapable through its
      subsidiaries. DeSantis has landed some solid hits against Disney, including helping cost CEO Bob Chapek his job
      over the fight over the Florida Parental Rights in Education law, tagged "Don't Say Gay" by its critics. Disney
      has also dropped in the Axios-Harris reputational rankings for the most visible brands in America. However, as of
      late last year, Disney still remained more popular than DeSantis. Politicians who tangle with beloved pop culture
      juggernauts risk becoming punchlines. Disney owns the rights to "The Simpsons," whose fictional Springfield family
      famously retorted to then-President George H.W. Bush's barb that the average American family needs to be "more
      like the Waltons and less like the Simpsons." In a more recent episode, President Barack Obama's 2012 presidential
      campaign loved to tweak then-former Massachusetts Governor Mitt Romney over his proposal to end taxpayer support
      of PBS. DeSantis is unlikely to stop his feud with Disney, as he sees traditional conservatism as failing to meet
      the moment where "woke corporations" can use their perches to side against Republicans. However, Bob Iger, who
      returned to his old job as CEO of Disney, has said he wants to sit down with DeSantis and hash things out.
      Meanwhile, reminders of Disney's staying power are everywhere, including the nation's capital's cherry blossom
      festival, where Mickey and Minnie Mouse led the parade.
    </p>
  </Card>
);

export const Default = Template.bind({});
Default.args = {};
