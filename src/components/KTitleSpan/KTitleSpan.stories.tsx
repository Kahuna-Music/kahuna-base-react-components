import {Meta, StoryFn} from "@storybook/react";
import KTitleSpan from "./KTitleSpan";

export default {
  title: "ReactComponentLibrary/KTitleSpan",
  component: KTitleSpan,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof KTitleSpan>;

const Template: StoryFn<typeof KTitleSpan> = (args) => <KTitleSpan {...args} />;

export const KTitleSpanPrimary = Template.bind({});
KTitleSpanPrimary.args = {
  text: "Hello World",
  fontSize: 48,
  color: "#111",
  lineHeight: "56px",
  fontStyle: "normal",
  letterSpacing: "-0.48px",
  bold: false
};
