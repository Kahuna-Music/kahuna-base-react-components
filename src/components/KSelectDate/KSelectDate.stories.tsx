import { Meta, StoryFn } from "@storybook/react"
import KSelectDate, { KSelectDateProps } from "./KSelectDate"
import { useEffect, useState } from "react"
//@ts-ignore
import CalendarNewIcon from "../../assets/calendar-new.svg"
import KSpan from "../KSpan"

export default {
  title: "ReactComponentLibrary/KSelectDate",
  component: KSelectDate,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KSelectDate>

const KSelectDateWrapper: React.FC<KSelectDateProps> = (args) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  useEffect(() => {
    // console.log("selectedDate: ", selectedDate)
  }, [selectedDate])

  return (
    <div className=" flex flex-row gap-4 items-center">
      <div className="flex flex-row items-center justify-center w-auto h-40 z-10">
        <KSpan text="Burada metin va dkkpork okoekrpo koprkefokporekfpr fe ref rfre fref er " />
      </div>
      <div className="flex flex-col relative">
          <KSelectDate
            {...args}
            value={selectedDate}
            onChange={(date) => {
              // console.log("date: ", date)
              if (date) {
                setSelectedDate(date)
                console.log("updating is completed: ", date)
                // console.log("updating is completed date.toISOString(): ", date?.toISOString())
              } else {
                setSelectedDate(undefined)
                // console.log("Deleting is completed")
              }
            }}
            anchorToButton
          />
          <KSelectDate
            {...args}
            value={selectedDate}
            onChange={(date) => {
              // console.log("date: ", date)
              if (date) {
                setSelectedDate(date)
                console.log("updating is completed: ", date)
                // console.log("updating is completed date.toISOString(): ", date?.toISOString())
              } else {
                setSelectedDate(undefined)
                // console.log("Deleting is completed")
              }
            }}
            anchorToButton
          />
      </div>
      <div></div>
    </div>
  )
}

const Template: StoryFn<typeof KSelectDateWrapper> = (args) => <KSelectDateWrapper {...args} />

export const KSelectDatePrimary = Template.bind({})
KSelectDatePrimary.args = {
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

export const KSelectDateHoverText = Template.bind({})
KSelectDateHoverText.args = {
  width: "44px",
  height: "44px",
  backgroundColor: "#F3F3F3",
  hoverBackgroundColor: "#F7F7F7",
  boxShadow: "none",
  borderRadius: 22,
  icon: CalendarNewIcon,
  hideBody: true
}
