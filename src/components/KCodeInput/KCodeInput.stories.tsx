import { Meta, StoryFn } from "@storybook/react"
import KCodeInput from "./KCodeInput"
// @ts-ignore
import TracksIcon from "../../assets/tracks.svg"
import { KeyboardEvent } from "react"

export default {
  title: "ReactComponentLibrary/KCodeInput",
  component: KCodeInput,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KCodeInput>

const Template: StoryFn<typeof KCodeInput> = (args) => <KCodeInput {...args} />

export const KInputRange = Template.bind({})
KInputRange.args = {
  onChange: (value: string) => {},
  hoverBackground: "white",
  length: 4,
  isAlphaNumeric: true,
  sendImmediately: true
}
