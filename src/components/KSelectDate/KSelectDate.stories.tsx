import { Meta, StoryFn } from "@storybook/react"
import KSelectDate from "./KSelectDate"

export default {
  title: "ReactComponentLibrary/KSelectDate",
  component: KSelectDate,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KSelectDate>

const Template: StoryFn<typeof KSelectDate> = (args) => <KSelectDate {...args} />

export const KSelectDatePrimary = Template.bind({})
KSelectDatePrimary.args = {
  value:undefined,
  onChange: (value) => {
    if (value) {
      console.log("value is updated using this value:", value)
    } else {
      console.log("value is deleted, because it is: ", value)
    }
    
  }
}


export const KSelectDateHoverText = Template.bind({})
KSelectDateHoverText.args = {

}
