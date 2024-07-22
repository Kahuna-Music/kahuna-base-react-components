import { Meta, StoryFn } from "@storybook/react"
import KSliderLabel, { SliderLabelOption, SliderLabelProps } from "./KSliderLabel"
import { useState } from "react"

export default {
  title: "ReactComponentLibrary/KSliderLabel",
  component: KSliderLabel,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KSliderLabel>

const KSliderLabelWrapper: React.FC<SliderLabelProps> = (args) => {
  const [lengthOfContract, setLengthOfContract] = useState<number>(args.value || 1)
  const lengthOfContractOptions: SliderLabelOption[] = [
    { value: 1, label: "6 months" },
    { value: 2, label: "1 year" },
    { value: 3, label: "2 years" },
    { value: 4, label: "3 years" },
    { value: 5, label: "5 years" }
  ]

  return (
    <div className="w-[616px]">
      <KSliderLabel
        options={lengthOfContractOptions}
        value={lengthOfContract}
        onChange={(sliderOption: SliderLabelOption) => {
          console.log("DENEME")
          setLengthOfContract(sliderOption.value)
        }}
        titleText={"Contract Duration"}
        valueText={lengthOfContractOptions.find((option) => option.value === lengthOfContract)?.label || ""}
      />
    </div>
  )
}

const Template: StoryFn<typeof KSliderLabelWrapper> = (args) => <KSliderLabelWrapper {...args} />

export const KSliderLabelPrimary = Template.bind({})
KSliderLabelPrimary.args = {
  value: 1,
  options: [
    { value: 1, label: "6 months" },
    { value: 2, label: "1 year" },
    { value: 3, label: "2 years" },
    { value: 4, label: "3 years" },
    { value: 5, label: "5 years" }
  ],
  titleText: "Contract Duration",
  onChange: (option: SliderLabelOption) => {
    // Do 
    console.log("0")
  },
  fontSize: 10
}
