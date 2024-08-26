import { Meta, StoryFn } from "@storybook/react"
import KSelectRange, { KSelectRangeProps, DateRangeType } from "./KSelectRange"
import { useEffect, useState } from "react"

export default {
  title: "ReactComponentLibrary/KSelectRange",
  component: KSelectRange,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KSelectRange>

const KSelectRangeWrapper: React.FC<KSelectRangeProps> = (args) => {
  const [selectedDate, setSelectedDate] = useState<DateRangeType>([
    new Date(new Date().setMonth(new Date().getMonth() - 1)), // Start date: 3 months ago
    new Date() // End date: today
  ])
  useEffect(() => {
    // console.log("selectedDate: ", selectedDate)
  }, [selectedDate])

  return (
    <KSelectRange
      {...args}
      value={selectedDate}
      onChange={(date: DateRangeType) => {
        // console.log("date: ", date)
        if (date) {
          setSelectedDate(date)
          console.log("updating is completed: ", date)
          // console.log("updating is completed date.toISOString(): ", date?.toISOString())
        } else {
          setSelectedDate(null)
          // console.log("Deleting is completed")
        }
      }}
    />
  )
}

const Template: StoryFn<typeof KSelectRangeWrapper> = (args) => <KSelectRangeWrapper {...args} />

export const KSelectRangePrimary = Template.bind({})
KSelectRangePrimary.args = {
  onChange: (value) => {
    if (value) {
      console.log("value is updated using this value:", value)
    } else {
      console.log("value is deleted, because it is: ", value)
    }
  }
}

export const KSelectRangeHoverText = Template.bind({})
KSelectRangeHoverText.args = {}
