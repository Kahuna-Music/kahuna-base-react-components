import {Meta, StoryFn} from "@storybook/react";
import KButton from "./KButton";

export default {
  title: "ReactComponentLibrary/Rating",
  component: KButton,
} as Meta<typeof KButton>;

const Template: StoryFn<typeof KButton> = (args) => <KButton {...args} />;

export const RatingTest = Template.bind({});
RatingTest.args = {
  label: "Save Me!",
  theme: "primary",
  testIdPrefix: "rating",
};

export const RatingSecondary = Template.bind({});
RatingSecondary.args = {
  label: "Secondary theme Save V2",
  theme: "secondary",
  testIdPrefix: "rating",
};