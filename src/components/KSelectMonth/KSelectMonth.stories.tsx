import { Meta, StoryFn } from "@storybook/react"
import KSelectMonth, { KSelectMonthProps } from "./KSelectMonth"
import { useEffect, useState } from "react"

export default {
  title: "ReactComponentLibrary/KSelectMonth",
  component: KSelectMonth,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KSelectMonth>

const KSelectMonthWrapper: React.FC<KSelectMonthProps> = (args) => {

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  useEffect(() => {
    // console.log("selectedDate: ", selectedDate)
  }, [selectedDate])

  return (
    <KSelectMonth
      {...args}
      value={selectedDate}
      onChange={(date) => {
        // console.log("date: ", date)
        if (date) {
          setSelectedDate(date)
          // console.log("updating is completed: ", date)
          // console.log("updating is completed date.toISOString(): ", date?.toISOString())
        } else {
          setSelectedDate(undefined)
          // console.log("Deleting is completed")
        }
      }}
    />
  )
}

const Template: StoryFn<typeof KSelectMonthWrapper> = (args) => <KSelectMonthWrapper {...args} />

export const KSelectMonthPrimary = Template.bind({})
KSelectMonthPrimary.args = {
  value: undefined,
  minimumDate: new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000),
  onChange: (value) => {
    if (value) {
      console.log("value is updated using this value:", value)
    } else {
      console.log("value is deleted, because it is: ", value)
    }
  }
}

export const KSelectMonthHoverText = Template.bind({})
KSelectMonthHoverText.args = {}
