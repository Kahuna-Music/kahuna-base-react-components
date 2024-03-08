import {Meta, StoryFn} from "@storybook/react";
import KButton from "./KSpan";
import KSpan from "./KSpan";

export default {
  title: "ReactComponentLibrary/KSpan",
  component: KSpan,
} as Meta<typeof KSpan>;

const Template: StoryFn<typeof KButton> = (args) => <KButton {...args} />;

export const SpanTest = Template.bind({});
SpanTest.args = {
  text: "Spanning :))!",
  theme: "primary",
  testIdPrefix: "rating",
};