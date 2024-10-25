import {Meta, StoryFn} from "@storybook/react";
import KTitleSpan, { KTitleSpanProps } from "./KTitleSpan";

export default {
  title: "ReactComponentLibrary/KTitleSpan",
  component: KTitleSpan,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof KTitleSpan>;

const KTitleSpanWrapper: React.FC<KTitleSpanProps> = (args) => {

  return (
    <div className="w-[150px]">
    <KTitleSpan
      {...args}
    />
    </div>
  )
}

const Template: StoryFn<typeof KTitleSpanWrapper> = (args) => <KTitleSpanWrapper {...args} />;

export const KTitleSpanPrimary = Template.bind({});
KTitleSpanPrimary.args = {
  text: "Hello World",
  fontSize: 48,
  color: "#111",
  lineHeight: "56px",
  fontStyle: "normal",
  letterSpacing: "-0.48px",
  bold: false,
  ellipsis: true
};
