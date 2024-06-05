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

}


export const KSelectDateHoverText = Template.bind({})
KSelectDateHoverText.args = {
  text: "Hello World",
  fontSize: 14,
  fontWeight: 400,
  lineHeight: "20px",
  color: "#111",
  fontStyle: "normal",
  letterSpacing: "-0.084px",
  hoverText: "Hover"
}
