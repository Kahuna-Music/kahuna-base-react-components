import { Meta, StoryFn } from "@storybook/react"
import KSelectDate, { KSelectDateProps } from "./KSelectDate"
import { useEffect, useState } from "react"

export default {
  title: "ReactComponentLibrary/KSelectDate",
  component: KSelectDate,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KSelectDate>

const KSelectDateWrapper: React.FC<KSelectDateProps> = (args) => {

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(args.value)
  useEffect(() => {
    console.log("selectedDate: ", selectedDate)
  }, [selectedDate])

  return (
    <KSelectDate
      {...args}
      value={selectedDate}
      onChange={(date) => {
        console.log("date: ", date)
        if (date) {
          setSelectedDate(date)
          console.log("updating is completed: ", date)
        } else {
          setSelectedDate(undefined)
          console.log("Deleting is completed")
        }
      }}
    />
  )
}

const Template: StoryFn<typeof KSelectDateWrapper> = (args) => <KSelectDateWrapper {...args} />

export const KSelectDatePrimary = Template.bind({})
KSelectDatePrimary.args = {
  value: undefined,
  onChange: (value) => {
    if (value) {
      console.log("value is updated using this value:", value)
    } else {
      console.log("value is deleted, because it is: ", value)
    }
  }
}

export const KSelectDateHoverText = Template.bind({})
KSelectDateHoverText.args = {}
