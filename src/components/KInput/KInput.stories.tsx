import {Meta, StoryFn} from "@storybook/react";
import KInput from "./KInput";
// @ts-ignore
import TracksIcon from "../../assets/tracks.svg";
import { KeyboardEvent } from "react";

export default {
  title: "ReactComponentLibrary/KInput",
  component: KInput,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof KInput>;

const Template: StoryFn<typeof KInput> = (args) => <KInput {...args} />;

export const KInputRange= Template.bind({});
KInputRange.args = {
  onChange: (value: string) => {
  },
  placeholder: "Placeholder...",
  hoverBackground: "white",
  type: "range",
  leftIcon: TracksIcon,
  rightIcon: TracksIcon
};

export const KInputCheckbox= Template.bind({});
KInputCheckbox.args = {
  onChange: (value: string) => {
  },
  placeholder: "Placeholder...",
  hoverBackground: "white",
  type: "checkbox",
  leftIcon: TracksIcon,
  rightIcon: TracksIcon,
  checked: false
};


export const KInputPrimary = Template.bind({});
KInputPrimary.args = {
  onChange: (value: string) => {
    console.log("value:", value)
  },
  onKeyDown:(event: KeyboardEvent) => {
    if (event.key === "Enter") { 
      console.log("Enter is clicked and our value is:", event.currentTarget )
    }   
  },
  placeholder: "Placeholder...",
  hoverBackground: "white"
};

export const KInputLeftIcon = Template.bind({});
KInputLeftIcon.args = {
  onChange: (value: string) => {

  },
  placeholder: "Placeholder...",
  leftIcon: TracksIcon,
  leftIconClick: () => {alert("left icon clicked")}
};

export const KInputRightIcon = Template.bind({});
KInputRightIcon.args = {
  onChange: (value: string) => {

  },
  placeholder: "Placeholder...",
  rightIcon: TracksIcon,
  rightIconClick: () => {alert("right icon clicked")}
};

export const KInputLeftRightIcon = Template.bind({});
KInputLeftRightIcon.args = {
  onChange: (value: string) => {

  },
  placeholder: "Placeholder...",
  leftIcon: TracksIcon,
  rightIcon: TracksIcon,
  leftIconClick: () => {alert("left icon clicked")},
  rightIconClick: () => {alert("right icon clicked")}
};