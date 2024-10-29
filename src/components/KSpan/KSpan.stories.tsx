import { Meta, StoryFn } from "@storybook/react"
import KSpan, { KSpanProps } from "./KSpan"

export default {
  title: "ReactComponentLibrary/KSpan",
  component: KSpan,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KSpan>

const KSpanWrapper: React.FC<KSpanProps> = (args) => {

  return (
    <div className="min-[1000px]:w-[400px] min-[800px]:w-[300px] min-[700px]:w-[150px] w-28">
      <div className="w-[100%] flex ">
        <KSpan {...args} />
      </div>
    </div>
  )
}

const Template: StoryFn<typeof KSpanWrapper> = (args) => <KSpanWrapper {...args} />

export const KSpanPrimary = Template.bind({})
KSpanPrimary.args = {
  text: "Hello World, how are you? Is everything alright?",
  fontSize: 14,
  color: "#737373",
  fontWeight: 400,
  lineHeight: "20px",
  fontStyle: "normal",
  letterSpacing: "-0.084px",
  textDecoration: "underline",
  ellipsis: true
}


export const KSpanHoverText = Template.bind({})
KSpanHoverText.args = {
  text: "Hello World",
  fontSize: 14,
  fontWeight: 400,
  lineHeight: "20px",
  color: "#111",
  fontStyle: "normal",
  letterSpacing: "-0.084px",
  hoverText: "Hover"
}
