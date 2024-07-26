import { Meta, StoryFn } from "@storybook/react"
import KCodeInput, { KCodeInputProps } from "./KCodeInput"
// @ts-ignore
import { useEffect, useState } from "react"

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
    <div className="w-[300px] p-4">
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
  allowedCharacters: 'alpha',
  autoSend: true,
  isPassword: false,
  disabled: false,
  autoFocus:true,
  gap:2,
  width: 150,
  background: "red",
  hoverBackground: "green",
  focusedBackground: "blue",
  filledBackground: "black",
  fitInContainer: true,
  border: "1px solid black",
  hoverBorder: "1px solid yellow",
  focusedBorder: "1px solid white",
  filledBorder: "1px solid gray",
  fontSize: "15px",
  padding: "10px",
  color: "white", 
}

export const KCodeInputSecondary = Template.bind({})
KCodeInputSecondary.args = {
  isCodeCorrect: true,
  boxShadow: "1px 2px 10px black",
  hoverBoxShadow: "1px 2px 10px red",
  focusedBoxShadow: "1px 2px 10px yellow",
  filledBoxShadow: "1px 2px 10px purple",
  fontSize: "30px",
  padding: "10px",
  color: "orange", 
  autoBlur: true,
  autoFocus: true,
  width: 50,
  height: 90,
  fitInContainer: true,
  gap: 12
}

export const KCodeInputDefault = Template.bind({})
KCodeInputDefault.args = {
  isCodeCorrect: false,
  allowedCharacters:"numeric"
}
