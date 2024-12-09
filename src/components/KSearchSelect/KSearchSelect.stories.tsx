import { Meta, StoryFn } from "@storybook/react"
import KSearchSelect, { KSearchSelectProps } from "./KSearchSelect"
// @ts-ignore
import { KeyboardEvent, useState } from "react"

export default {
  title: "ReactComponentLibrary/KInput",
  component: KSearchSelect,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KSearchSelect>


const KSearchSelectWrapper: React.FC<KSearchSelectProps> = (args) => {

 const [textValue, setTextValue] = useState<string>("")

  return (
    <KSearchSelect
      {...args}
      value={textValue}
      onChange={(text) => {
        setTextValue(text)

      }}
    />
  )
}

const Template: StoryFn<typeof KSearchSelectWrapper> = (args) => <KSearchSelectWrapper {...args} />

export const KSearchSelectPrimary = Template.bind({})
KSearchSelectPrimary.args = {

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


