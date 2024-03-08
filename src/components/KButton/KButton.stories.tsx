import {Meta, StoryFn} from "@storybook/react";
import KButton from "./KButton";

export default {
  title: "ReactComponentLibrary/KButton",
  component: KButton,
} as Meta<typeof KButton>;

const Template: StoryFn<typeof KButton> = (args) => <KButton {...args} />;

export const ButtonTest = Template.bind({});
ButtonTest.args = {
  label: "Save Me!",
  theme: "primary",
  testIdPrefix: "rating",
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  label: "Secondary theme Save V2",
  theme: "secondary",
  testIdPrefix: "rating",
};