import { Meta, StoryFn } from "@storybook/react"
import KSpan from "./KSpan"

export default {
  title: "ReactComponentLibrary/KSpan",
  component: KSpan,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KSpan>

const Template: StoryFn<typeof KSpan> = (args) => <KSpan {...args} />

export const KSpanPrimary = Template.bind({})
KSpanPrimary.args = {
  text: "Hello World",
  fontSize: 14,
  color: "#737373",
  fontWeight: 400,
  lineHeight: "20px",
  fontStyle: "normal",
  letterSpacing: "-0.084px",
  textDecoration: "underline"
}


export const KSpanHoverText = Template.bind({})
KSpanHoverText.args = {
  text: "Hello World",
  fontSize: 14,
  fontWeight: 400,
  lineHeight: "20px",
  color: "#111",
  fontStyle: "normal",
  letterSpacing: "-0.084px",
  hoverText: "Hover"
}
