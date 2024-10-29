import { Meta, StoryFn } from "@storybook/react"
import KEllipsisSpan, { KEllipsisSpanProps } from "./KEllipsisSpan"

export default {
  title: "ReactComponentLibrary/KEllipsisSpan",
  component: KEllipsisSpan,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KEllipsisSpan>

const KEllipsisSpanWrapper: React.FC<KEllipsisSpanProps> = (args) => {

  return (
    <div className="min-[1000px]:w-[400px] min-[800px]:w-[300px] min-[700px]:w-[150px] w-28">
      <div className="w-[100%] flex ">
        <KEllipsisSpan {...args} />
      </div>
    </div>
  )
}

const Template: StoryFn<typeof KEllipsisSpanWrapper> = (args) => <KEllipsisSpanWrapper {...args} />

export const KEllipsisSpanPrimary = Template.bind({})
KEllipsisSpanPrimary.args = {
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



