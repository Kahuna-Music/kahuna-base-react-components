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
    <div className="w-[300px]">
    <KCodeInput
      {...args}
      onChange={(value:string) => {
        //console.log("value: ", value);
        setCode(value);
        //console.log("Value updated to: ", option.value);
      }}
    />
    </div>
  );
};


const Template: StoryFn<typeof KCodeInput> = (args) => <KCodeInputWrapper {...args} />

export const KCodeInputPrimary = Template.bind({})
KCodeInputPrimary.args = {
  length: 6,
  allowedCharacters: 'alphaNumeric',
  sendImmediately: true,
  isPassword: false,
  disabled: false,
  autoFocus:true,
  fitInContainer: true,
  gap:2,
  background: "red",
  hoverBackground: "green",
  focusedBackground: "blue",
  filledBackground: "black",
  border: "4px solid black",
  hoverBorder: "2px solid yellow",
  focusedBorder: "3px solid purple",
  filledBorder: "5px solid gray",
  fontSize: "15px",
  padding: "10px",
  color: "white",
  
}
