import {Meta, StoryFn} from "@storybook/react";
import KInput from "./KInput";
// @ts-ignore
import TracksIcon from "../../assets/tracks.svg";

export default {
  title: "ReactComponentLibrary/KInput",
  component: KInput,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof KInput>;

const Template: StoryFn<typeof KInput> = (args) => <KInput {...args} />;

export const KInputPrimary = Template.bind({});
KInputPrimary.args = {
  setValue: (value: string) => {

  },
  placeholder: "Placeholder..."
};

export const KInputLeftIcon = Template.bind({});
KInputLeftIcon.args = {
  setValue: (value: string) => {

  },
  placeholder: "Placeholder...",
  leftIcon: TracksIcon,
};