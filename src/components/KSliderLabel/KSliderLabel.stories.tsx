import React, { useEffect, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import KSliderLabel, { SliderLabelProps, SliderLabelOption } from "./KSliderLabel";

export default {
  title: "ReactComponentLibrary/KSliderLabel",
  component: KSliderLabel,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof KSliderLabel>;

const KSliderLabelWrapper: React.FC<SliderLabelProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState<number | undefined>(0);

  useEffect(() => {
    console.log("selectedValue: ", selectedValue);
  }, [selectedValue]);

  return (
    <KSliderLabel
      {...args}
      value={selectedValue}
      onChange={(option) => {
        console.log("option: ", option);
        setSelectedValue(option.value);
        console.log("Value updated to: ", option.value);
      }}
    />
  );
};

const Template: StoryFn<typeof KSliderLabelWrapper> = (args) => <KSliderLabelWrapper {...args} />;

const options: SliderLabelOption[] = [
  { label: "Low", value: 0 },
  { label: "Medium", value: 1 },
  { label: "Medium", value: 3 },
  { label: "Medium", value: 4 },
  { label: "Medium", value: 5 },
];

export const KSliderLabelPrimary = Template.bind({});
KSliderLabelPrimary.args = {
  options,
  disabled: false,
  width: "440px",
  titleText: "Slider Title",
  valueText: "50",
  fontSize: 14,
  color: "#000",
};

export const KSliderLabelHoverText = Template.bind({});
KSliderLabelHoverText.args = {
  options,
  titleText: "Hover to see me!",
  valueText: "50",
  fontSize: 14,
  color: "#000",
};
