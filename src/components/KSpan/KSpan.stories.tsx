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
  text: "Burada uzun metin var, overflow olabilir.",
  fontSize: 14,
  color: "#1F1F1F",
  fontWeight: 400,
  lineHeight: "20px",
  fontStyle: "normal",
  letterSpacing: "-0.084px",
  textDecoration: "none",
  ellipsis: true,
  hoverStyle: {
    textDecoration: "underline",
    cursor: "pointer",
    fontWeight: "500",
    transitionDuration: "0.5s",
    transitionTimingFunction: "linear"
  }
}
