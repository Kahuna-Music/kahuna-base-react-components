import { Meta, StoryFn } from "@storybook/react"
import KSelectRange, { KSelectRangeProps, DateRangeType } from "./KSelectRange"
import { useEffect, useState } from "react"
// @ts-ignore
import AppleIcon from "../../assets/platforms/apple-music.svg"
// @ts-ignore
import MetaIcon from "../../assets/platforms/Meta.svg"
// @ts-ignore
import TiktokIcon from "../../assets/platforms/tiktok.svg"
// @ts-ignore
import SpotifyIcon from "../../assets/platforms/Spotify.svg"
// @ts-ignore
import YoutubeIcon from "../../assets/platforms/youtube.svg"
// @ts-ignore
import NcmIcon from "../../assets/platforms/ncm.svg"
// @ts-ignore
import CaretDownIcon from "../../assets/platforms/caret-down.svg"


export default {
  title: "ReactComponentLibrary/KSelectRange",
  component: KSelectRange,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KSelectRange>

const KSelectRangeWrapper: React.FC<KSelectRangeProps> = (args) => {
  const [selectedDate, setSelectedDate] = useState<DateRangeType>([
    new Date(new Date().setMonth(new Date().getMonth() - 10)), // Start date: 3 months ago
    new Date() // End date: today
  ])
  useEffect(() => {
    // console.log("selectedDate: ", selectedDate)
  }, [selectedDate])

  return (
    <div><KSelectRange
      {...args}
      value={selectedDate}
      onChange={(date: DateRangeType) => {
        // console.log("date: ", date)
        if (date) {
          setSelectedDate(date)
          //console.log("updating is completed: ", date)
          // console.log("updating is completed date.toISOString(): ", date?.toISOString())
        } else {
          setSelectedDate(null)
          // console.log("Deleting is completed")
        }
      }}
    /></div>
  )
}

const Template: StoryFn<typeof KSelectRangeWrapper> = (args) => <KSelectRangeWrapper {...args} />

export const KSelectRangePrimary = Template.bind({})
KSelectRangePrimary.args = {
  width: "48px",
  height: "48px",
  backgroundColor: "#F7F7F7",
  hoverBackgroundColor: "#F3F3F3",
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
