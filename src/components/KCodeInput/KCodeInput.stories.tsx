import { Meta, StoryFn } from "@storybook/react"
import KCodeInput, { KCodeInputProps } from "./KCodeInput"
// @ts-ignore
import TracksIcon from "../../assets/tracks.svg"
import { KeyboardEvent, useEffect, useState } from "react"

export default {
  title: "ReactComponentLibrary/KCodeInput",
  component: KCodeInput,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KCodeInput>

const KCodeInputWrapper: React.FC<KCodeInputProps> = (args) => {
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    console.log("code: ", code);
  }, [code]);

  return (
    <KCodeInput
      {...args}
      onChange={(value:string) => {
        //console.log("value: ", value);
        setCode(value);
        //console.log("Value updated to: ", option.value);
      }}
    />
  );
};


const Template: StoryFn<typeof KCodeInput> = (args) => <KCodeInputWrapper {...args} />

export const KCodeInputPrimary = Template.bind({})
KCodeInputPrimary.args = {
  hoverBackground: "white",
  length: 6,
  allowedCharacters: 'alphaNumeric',
  sendImmediately: true,
  password: false,
  disabled: false,
  autoFocus:true
}
