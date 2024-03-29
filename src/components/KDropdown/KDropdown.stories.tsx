import {Meta, StoryFn} from "@storybook/react";
import KDropdown, {KSelectOption} from "./KDropdown";
// @ts-ignore
import TracksIcon from "../../assets/tracks.svg";
import {MultiValue} from "react-select";

export default {
  title: "ReactComponentLibrary/KDropdown",
  component: KDropdown,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof KDropdown>;

const Template: StoryFn<typeof KDropdown> = (args) => <KDropdown {...args} />;

export const KDropdownSingle = Template.bind({});
KDropdownSingle.args = {
  onSelect: (value: KSelectOption | MultiValue<KSelectOption>) => {

  },
  placeholder: "Placeholder...",
  options: [{label: "Label 1", value: 1}, {label: "Label 2", value: 2}, {label: "Label 3", value: 3}]
};

export const KDropdownMulti = Template.bind({});
KDropdownMulti.args = {
  onSelect: (value: KSelectOption | MultiValue<KSelectOption>) => {

  },
  placeholder: "Multi...",
  options: [{label: "Label 1", value: 1}, {label: "Label 2", value: 2}, {label: "Label 3", value: 3}],
  isMulti: true
};

export const KDropdownLeftIcon = Template.bind({});
KDropdownLeftIcon.args = {
  onSelect: (value: KSelectOption | MultiValue<KSelectOption>) => {

  },
  placeholder: "Placeholder...",
  leftIcon: TracksIcon,
};

export const KDropdownRightIcon = Template.bind({});
KDropdownRightIcon.args = {
  onSelect: (value: KSelectOption | MultiValue<KSelectOption>) => {

  },
  placeholder: "Placeholder...",
  rightIcon: TracksIcon,
};

export const KDropdownLeftRightIcon = Template.bind({});
KDropdownLeftRightIcon.args = {
  onSelect: (value: KSelectOption | MultiValue<KSelectOption>) => {

  },
  placeholder: "Placeholder...",
  leftIcon: TracksIcon,
  rightIcon: TracksIcon,
};