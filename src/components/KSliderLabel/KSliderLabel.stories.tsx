import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import KSliderLabel, { SliderLabelOption, SliderLabelProps } from "./KSliderLabel"

export default {
  title: "Components/KSliderLabel",
  component: KSliderLabel,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KSliderLabel>

const Template: StoryFn<SliderLabelProps> = (args) => {
  const [currentValue, setCurrentValue] = useState<number>(args.value || 0)

  const handleChange = (option: SliderLabelOption) => {
    setCurrentValue(option.value)
    if (args.onChange) {
      args.onChange(option)
    }
  }

  const options: SliderLabelOption[] = [
    { value: 1, label: "6 months" },
    { value: 2, label: "1 year" },
    { value: 3, label: "2 years" },
    { value: 4, label: "3 years" },
    { value: 5, label: "5 years" }
  ]

  return (
    <div className="w-[616px]">
      <KSliderLabel
        {...args}
        options={options}
        value={currentValue}
        onChange={handleChange}
        titleText={args.titleText || "Contract Duration"}
        valueText={options.find(option => option.value === currentValue)?.label || ""}
      />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  value: 1,
  titleText: "Contract Duration"
}
