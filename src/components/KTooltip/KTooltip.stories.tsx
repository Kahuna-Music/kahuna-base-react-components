import {Meta, StoryFn} from "@storybook/react";
import KTooltip, { KTooltipProps } from "./KTooltip";

export default {
  title: "ReactComponentLibrary/KTooltip",
  component: KTooltip,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof KTooltip>;

const Template: StoryFn<KTooltipProps> = (args) => (
  <KTooltip {...args}>
    <div className="bg-red-200">Tooltip Content</div> {/* Here we place the children directly */}
  </KTooltip>
);

export const KTooltipPrimary = Template.bind({});
KTooltipPrimary.args = {
  content: <div className="bg-red-100 flex justify-center w-[150px] h-[100px] items-center">
    <div className="bg-green-300 font-extrabold ">BURADA</div>
  </div>,
  position: "top",
  zIndex: 1000,
  arrowColor:"green",
  showArrow: true,
  //boxShadow: "3px 3px 10px #000",
  //borderRadius: "100px",
};