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

export const KLogoText = Template.bind({});
KLogoText.args = {
  logoColor: "white",
  width: 77,
  height: 77
};

export const KLogoHover = Template.bind({});
KLogoHover.args = {
  hoverEnabled: true,logoColor:"gray"
};
