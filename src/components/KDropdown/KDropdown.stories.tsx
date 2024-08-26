import { Meta, StoryFn } from "@storybook/react"
import KDropdown, { KSelectOption } from "./KDropdown"
// @ts-ignore
import TracksIcon from "../../assets/tracks.svg"
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

import { MultiValue } from "react-select"

export default {
  title: "ReactComponentLibrary/KDropdown",
  component: KDropdown,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KDropdown>

const Template: StoryFn<typeof KDropdown> = (args) => <KDropdown {...args} />

export const KDropdownSingle = Template.bind({})
KDropdownSingle.args = {
  onSelect: (value: KSelectOption | MultiValue<KSelectOption> | undefined) => {
    if (value === undefined) {
      console.log("our value is undefined, deleting process can be performed")
    } else {
      console.log("update process can be performed")
    }
  },
  width: 250,
  placeholder: "Select single...",
  isClearable: true,
  isEllipsis: true,
  // defaultValue: { label: "Label 1", value: 1, icon: TracksIcon },
  defaultValuePrimitive: 7,
  options: [
    { label: "Label 1", value: 1, icon: TracksIcon },
    { label: "Label 4", value: 2, icon: TracksIcon },
    { label: "Label 3", value: 3 },
    { label: "Label 2", value: 4 },
    { label: "R&B", value: 5 },
    { label: "Çınar", value: 6 },
    { label: "ELEKTRONIC ", value: 7 },
    { label: "TANIK", value: 8 },
    { label: "Very very very very very long content.", value: 9 },
    { label: "TANIK", value: 10 }
  ]
}

export const KDropdownMulti = Template.bind({})
const options = [
  { label: "Label 1", value: 1, icon: YoutubeIcon },
  { label: "Label 2", value: 2, icon: TiktokIcon },
  { label: "Label 2", value: 3, icon: NcmIcon },
  { label: "Label 2", value: 4, icon: AppleIcon },
  { label: "Label 2", value: 5, icon: MetaIcon },
  { label: "Label 2", value: 6, icon: SpotifyIcon },
  { label: "Label 7", value: 7 }
]
KDropdownMulti.args = {
  onSelect: (value: KSelectOption | MultiValue<KSelectOption> | undefined) => {},
  placeholder: "Multi...",
  options: options,
  isMulti: true,
  selected: options[0],
  rightIcon: CaretDownIcon,
  menuWidth: 200,
  width: 150
}

export const KDropdownLeftIcon = Template.bind({})
KDropdownLeftIcon.args = {
  onSelect: (value: KSelectOption | MultiValue<KSelectOption> | undefined) => {},
  placeholder: "Placeholder...",
  leftIcon: TracksIcon,
  menuWidth: 400
}

export const KDropdownRightIcon = Template.bind({})
KDropdownRightIcon.args = {
  onSelect: (value: KSelectOption | MultiValue<KSelectOption> | undefined) => {},
  placeholder: "Placeholder...",
  rightIcon: TracksIcon,
  width: 250,
  options: [
    { label: "Label 1", value: 1, icon: TracksIcon },
    { label: "Label 4", value: 2, icon: TracksIcon },
    { label: "Label 3", value: 3 },
    { label: "Label 2", value: 4 },
    { label: "Sevinç", value: 5 },
    { label: "Çınar", value: 6 },
    { label: "Ümit", value: 7 },
    { label: "TANIK", value: 8 }
  ]
}

export const KDropdownLeftRightIcon = Template.bind({})
KDropdownLeftRightIcon.args = {
  onSelect: (value: KSelectOption | MultiValue<KSelectOption> | undefined) => {},
  placeholder: "Placeholder...",
  leftIcon: TracksIcon,
  rightIcon: TracksIcon
}
