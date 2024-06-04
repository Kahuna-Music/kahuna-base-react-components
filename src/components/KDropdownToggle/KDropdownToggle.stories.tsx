import { Meta, StoryFn } from "@storybook/react"
import KDropdownToggle, { KSelectOption } from "./KDropdownToggle"
// @ts-ignore
import TracksIcon from "../../assets/tracks.svg"
import { MultiValue } from "react-select"
import { useEffect, useState } from "react"

export default {
  title: "ReactComponentLibrary/KDropdownToggle",
  component: KDropdownToggle,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KDropdownToggle>

const Template: StoryFn<typeof KDropdownToggle> = (args) => <KDropdownToggle {...args} />

export const KDropdownToggleSingle = Template.bind({})
KDropdownToggleSingle.args = {
  onSelect: (value: KSelectOption | MultiValue<KSelectOption> | null) => {},
  width: 250,
  placeholder: "Select single...",
  options: [
    { label: "Label 1", value: 1, icon: TracksIcon },
    { label: "Label 2", value: 2, icon: TracksIcon },
    { label: "Label 3", value: 3 },
    { label: "TANIK", value: 4 }
  ]
}

export const KDropdownToggleMulti = Template.bind({})
KDropdownToggleMulti.args = {
  onSelect: (value: KSelectOption | MultiValue<KSelectOption>) => {},
  width: 250,
  placeholder: "Multi...",
  options: [
    { label: "Label 1", value: 1, icon: TracksIcon },
    { label: "Label 2", value: 2, icon: TracksIcon },
    { label: "Label 3", value: 3 }
  ],
  isMulti: true
}

export const KDropdownToggleLeftIcon = Template.bind({})
KDropdownToggleLeftIcon.args = {
  onSelect: (value: KSelectOption | MultiValue<KSelectOption>) => {},
  placeholder: "Placeholder...",
  leftIcon: TracksIcon
}

export const KDropdownToggleRightIcon = Template.bind({})
KDropdownToggleRightIcon.args = {
  onSelect: (value: KSelectOption | MultiValue<KSelectOption>) => {},
  placeholder: "Placeholder...",
  rightIcon: TracksIcon,
  width: 250,
  options: [
    { label: "Label 1", value: 1, icon: TracksIcon },
    { label: "Label 2", value: 2, icon: TracksIcon },
    { label: "Label 3", value: 3 }
  ]
}

export const KDropdownToggleLeftRightIcon = Template.bind({})
KDropdownToggleLeftRightIcon.args = {
  onSelect: (value: KSelectOption | MultiValue<KSelectOption>) => {},
  placeholder: "Placeholder...",
  leftIcon: TracksIcon,
  rightIcon: TracksIcon
}
