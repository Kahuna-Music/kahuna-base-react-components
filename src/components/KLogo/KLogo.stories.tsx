import {Meta, StoryFn} from "@storybook/react";
import KLogo from "./KLogo";

export default {
  title: "ReactComponentLibrary/KLogo",
  component: KLogo,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof KLogo>;

const Template: StoryFn<typeof KLogo> = (args) => <KLogo {...args} />;

export const KLogoPrimary = Template.bind({});
KLogoPrimary.args = {
  width: 88,
  height: 88,
  borderRadius: 10,
};

export const KLogoPrimaryText = Template.bind({});
KLogoPrimaryText.args = {
  width: 88,
  height: 88,
  borderRadius: 10,
  primaryText: "Kahuna"
};

export const KLogoAllText = Template.bind({});
KLogoAllText.args = {
  width: 88,
  height: 88,
  borderRadius: 10,
  primaryText: "Kahuna",
  secondaryText: "for artists"
};
