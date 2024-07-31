import { Meta, StoryFn } from "@storybook/react"
import KTextArea from "./KTextArea"
// @ts-ignore
import TracksIcon from "../../assets/tracks.svg"
import { KeyboardEvent } from "react"

export default {
  title: "ReactComponentLibrary/KTextArea",
  component: KTextArea,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KTextArea>

const Template: StoryFn<typeof KTextArea> = (args) => <KTextArea {...args} />


export const KTextAreaPrimary = Template.bind({})
KTextAreaPrimary.args = {
  onChange: (value: string) => {
    console.log("value:", value)
  },
  onKeyDown: (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log("Enter is clicked and our value is:", event.currentTarget)
    }
  },
  rows: 4,
  placeholder: "Placeholder...",
  hoverBackground: "white"
}

export const KTextAreaLeftIcon = Template.bind({})
KTextAreaLeftIcon.args = {
  onChange: (value: string) => {},
  placeholder: "Placeholder...",
  leftIcon: TracksIcon,
  leftIconClick: () => {
    alert("left icon clicked")
  }
}

export const KTextAreaRightIcon = Template.bind({})
KTextAreaRightIcon.args = {
  onChange: (value: string) => {},
  placeholder: "Placeholder...",
  rightIcon: TracksIcon,
  rightIconClick: () => {
    alert("right icon clicked")
  }
}

export const KTextAreaLeftRightIcon = Template.bind({})
KTextAreaLeftRightIcon.args = {
  onChange: (value: string) => {},
  placeholder: "Placeholder...",
  leftIcon: TracksIcon,
  rightIcon: TracksIcon,
  leftIconClick: () => {
    alert("left icon clicked")
  },
  rightIconClick: () => {
    alert("right icon clicked")
  }
}
