import { Meta, StoryFn } from "@storybook/react"
import KInput, { KInputProps } from "./KInput"
// @ts-ignore
import TracksIcon from "../../assets/tracks.svg"
import { KeyboardEvent, useState } from "react"

export default {
  title: "ReactComponentLibrary/KInput",
  component: KInput,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KInput>


const KInputWrapper: React.FC<KInputProps> = (args) => {

 const [textValue, setTextValue] = useState<string>("")

  return (
    <KInput
      {...args}
      value={textValue}
      onChange={(text) => {
        setTextValue(text)

      }}
    />
  )
}

const Template: StoryFn<typeof KInputWrapper> = (args) => <KInputWrapper {...args} />

export const KInputPrimary = Template.bind({})
KInputPrimary.args = {

  onKeyDown: (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log("Enter is clicked and our value is:", event.currentTarget)
    }
  },
  placeholder: "Placeholder...",
  activeBackground: "yellow",
  hoverBorder: "1px solid yellow",
  activeBorder: "1px solid red",
}


export const KInputRange = Template.bind({})
KInputRange.args = {
  onChange: (value: string) => {},
  placeholder: "Placeholder...",
  hoverBackground: "white",
  type: "range",
  leftIcon: TracksIcon,
  rightIcon: TracksIcon
}

export const KInputCheckbox = Template.bind({})
KInputCheckbox.args = {
  onChange: (value: string) => {},
  placeholder: "Placeholder...",
  hoverBackground: "white",
  type: "checkbox",
  leftIcon: TracksIcon,
  rightIcon: TracksIcon,
  checked: false
}

export const KInputLeftIcon = Template.bind({})
KInputLeftIcon.args = {
  onChange: (value: string) => {},
  placeholder: "Placeholder...",
  leftIcon: TracksIcon,
  leftIconClick: () => {
    alert("left icon clicked")
  },
  activeBackground: "red",
  hoverBackground: "white",
  border: "1px solid black",
  activeBorder: "1px solid blue",
  hoverBorder: "1px solid yellow"

}

export const KInputRightIcon = Template.bind({})
KInputRightIcon.args = {
  onChange: (value: string) => {},
  placeholder: "Placeholder...",
  rightIcon: TracksIcon,
  rightIconClick: () => {
    alert("right icon clicked")
  }
}

export const KInputLeftRightIcon = Template.bind({})
KInputLeftRightIcon.args = {
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
