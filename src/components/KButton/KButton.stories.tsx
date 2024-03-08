import {Meta, StoryFn} from "@storybook/react";
import KButton from "./KButton";
// @ts-ignore
import ChevronRightIcon from "../../assets/chevron-right.svg"
// @ts-ignore
import ChevronLeftIcon from "../../assets/chevron-left.svg"
// @ts-ignore
import TracksIcon from "../../assets/tracks.svg"

export default {
  title: "ReactComponentLibrary/KButton",
  component: KButton,
} as Meta<typeof KButton>;

const Template: StoryFn<typeof KButton> = (args) => <KButton {...args} />;

export const KButtonText = Template.bind({});
KButtonText.args = {
  onClick: () => {
    alert("clicked")
  },
  text: "Hello World",
  background: "#F2FE67",
  borderRadius: 10,
  width: "160px",
  height: "44px"
};

export const KButtonIcon = Template.bind({});
KButtonIcon.args = {
  onClick: () => {
    alert("clicked")
  },
  icon: TracksIcon,
  width: "50px"
};

export const KButtonLeftIconText = Template.bind({});
KButtonLeftIconText.args = {
  onClick: () => {
    alert("clicked")
  },
  leftIcon: ChevronLeftIcon,
  text: "Hello World",
  width: "160px"
};

export const KButtonRightIconText = Template.bind({});
KButtonRightIconText.args = {
  onClick: () => {
    alert("clicked")
  },
  rightIcon: ChevronRightIcon,
  text: "Hello World",
  width: "160px"
};

export const KButtonLeftRightIconText = Template.bind({});
KButtonLeftRightIconText.args = {
  onClick: () => {
    alert("clicked")
  },
  leftIcon: ChevronLeftIcon,
  rightIcon: ChevronRightIcon,
  text: "Hello World",
  width: "160px"
};

export const KButtonLeftRightMiddleIcon = Template.bind({});
KButtonLeftRightMiddleIcon.args = {
  onClick: () => {
    alert("clicked")
  },
  leftIcon: ChevronLeftIcon,
  rightIcon: ChevronRightIcon,
  icon: TracksIcon,
  width: "160px"
};