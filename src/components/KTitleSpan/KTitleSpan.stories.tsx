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
    <div className="min-[1000px]:w-[300px] min-[800px]:w-[200px] min-[700px]:w-[150px] w-[100px]">
      <div className="w-[100%]">
        <KTitleSpan {...args} />
      </div>
    </div>
  )
}

const Template: StoryFn<typeof KTitleSpanWrapper> = (args) => <KTitleSpanWrapper {...args} />;

export const KTitleSpanPrimary = Template.bind({});
KTitleSpanPrimary.args = {
  text: "Hello  yo?",
  fontSize: 48,
  color: "#111",
  lineHeight: "56px",
  fontStyle: "normal",
  letterSpacing: "-0.48px",
  bold: false,
  ellipsis: true
};

export const KTitleSpanSecondary = Template.bind({});
KTitleSpanSecondary.args = {
  text: "Hello World",
  fontSize: 48,
  color: "#111",
  lineHeight: "56px",
  fontStyle: "normal",
  letterSpacing: "-0.48px",
  bold: false
};
