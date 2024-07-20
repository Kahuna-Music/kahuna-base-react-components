import {Meta, StoryFn} from "@storybook/react";
import KSlider, {SliderOption} from "./KSlider";

export default {
  title: "ReactComponentLibrary/KSlider",
  component: KSlider,
} as Meta<typeof KSlider>;

const Template: StoryFn<typeof KSlider> = (args) => <KSlider {...args} />;

export const KSliderPrimary = Template.bind({});
KSliderPrimary.args = {
  options: [{label: "0%", value: 0}, {label: "25%", value: 1}, {label: "50%", value: 2}, {label: "75%", value: 3}],
  onChange: (option: SliderOption) => {
    // Do Nothing
  },
  width: "200px",
  value: 2
};
