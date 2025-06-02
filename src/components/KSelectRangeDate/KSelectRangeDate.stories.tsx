import { Meta, StoryFn } from "@storybook/react"
import KSelectRangeDate, { KSelectRangeDateProps, DateRangeType } from "./KSelectRangeDate"
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
  title: "ReactComponentLibrary/KSelectRangeDate",
  component: KSelectRangeDate,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KSelectRangeDate>

const KSelectRangeDateWrapper: React.FC<KSelectRangeDateProps> = (args) => {
  const [selectedDate, setSelectedDate] = useState<DateRangeType>([
    new Date(new Date().setDate(new Date().getDate() - 7)), // Start date: 3 months ago
    new Date() // End date: today
  ])
  useEffect(() => {
    console.log("selectedDate: ", selectedDate)
  }, [selectedDate])
  const MILISECONDS_MONTH = 2678400000


  return (
    <div>
      <KSelectRangeDate
        {...args}
        value={selectedDate}
        onChange={(event: any) => {
          console.log("works")
          if (!event) {
            return
          }
          if (event[1] - event[0] > MILISECONDS_MONTH) {
            console.log("not allowed")
            return
          }

          setSelectedDate(event)
        }}
      />
      <div className="relative z-10"></div>
    </div>
  )
}

const Template: StoryFn<typeof KSelectRangeDateWrapper> = (args) => <KSelectRangeDateWrapper {...args} />

export const KSelectRangePrimary = Template.bind({})
KSelectRangePrimary.args = {
  width: "48px",
  height: "48px",
  backgroundColor: "#F7F7F7",
  hoverBackgroundColor: "#F3F3F3",
  borderRadius: 24,
  position: "bottom",
  align: "center",
  hideBackdrop: true,
  anchorToButton: true,

  onChange: (value) => {
    if (value) {
      console.log("value is updated using this value:", value)
    } else {
      console.log("value is deleted, because it is: ", value)
    }
  }
}

export const KSelectRangeDateMinimumDate = Template.bind({})
KSelectRangeDateMinimumDate.args = {
  width: "48px",
  height: "48px",
  backgroundColor: "#F7F7F7",
  hoverBackgroundColor: "#F3F3F3",
  borderRadius: 24,
  anchorToButton: true,
  position: "top",
  align: "center",
  minimumDate: new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000),

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
