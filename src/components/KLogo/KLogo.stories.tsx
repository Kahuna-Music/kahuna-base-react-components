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
  logoType: "text"
};

export const KLogoHover = Template.bind({});
KLogoHover.args = {
  logoType: "hover"
};

export const KLogoPrimary = Template.bind({});
KLogoPrimary.args = {
  logoType: "black"

};
export const KLogoWhite = Template.bind({});
KLogoWhite.args = {
  logoType: "white"

};
export const KLogoWhiteText = Template.bind({});
KLogoWhiteText.args = {
  logoType: "white-text"

};
export const KLogoGray = Template.bind({});
KLogoGray.args = {
  logoType: "gray"

};
export const KLogoGrayText = Template.bind({});
KLogoGrayText.args = {
  logoType: "gray-text"

};
export const KLogoBlackText = Template.bind({});
KLogoBlackText.args = {
  logoType: "black-text"

};