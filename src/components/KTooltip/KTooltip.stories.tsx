import { Meta, StoryFn } from "@storybook/react"
import KTooltip, { KTooltipProps } from "./KTooltip"
import KSpan from "../KSpan"

export default {
  title: "ReactComponentLibrary/KTooltip",
  component: KTooltip,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KTooltip>

const Template: StoryFn<KTooltipProps> = (args) => (
  <KTooltip {...args}>
    <div className="bg-red-200 w-[200px] aspect-square rounded-full flex items-center justify-center">
      Tooltip Children
    </div>{" "}
    {/* Here we place the children directly */}
  </KTooltip>
)

export const KTooltipPrimary = Template.bind({})
KTooltipPrimary.args = {
  content: (
    <div className="bg-red-100 flex justify-center items-center">
      <div className="bg-green-300 font-extrabold ">BURADA</div>
    </div>
  ),
  position: "top",
  align: "right",
  zIndex: 1000,
  arrowColor: "green",
  showArrow: true,
  padding: "10px",
  border: "1px solid red"
  //boxShadow: "3px 3px 10px #000",
  //borderRadius: "100px",
}

export const KTooltipSecondary = Template.bind({})
KTooltipPrimary.args = {
  content: (
    <div className="flex flex-col gap-2 justify-center items-start px-4 py-2">
      <div
        className="flex flex-row gap-1 whitespace-nowrap items-center"
        style={{
          opacity: true ? "1" : "0.3"
        }}
      >
        <span className="bg-[#21A494] px-0.5 py-1 flex items-center justify-center w-9 rounded-[3px]">
          <KSpan text="16-Bit" fontSize={10} lineHeight="10px" fontWeight={600} color="#FFF" />
        </span>
        {true ? (
          <KSpan text="Added" fontSize={12} lineHeight="12px" color="#1F1F1F" fontWeight={600} />
        ) : (
          <KSpan text="No File" fontSize={12} lineHeight="12px" color="#1F1F1F" fontWeight={600}></KSpan>
        )}
      </div>
      <div
        className="flex flex-row gap-1 whitespace-nowrap items-center"
        style={{
          opacity: true ? "1" : "0.3"
        }}
      >
        <span className="bg-[#BBCC13] px-0.5 py-1 flex items-center justify-center w-9 rounded-[3px]">
          <KSpan text="24-Bit" fontSize={10} lineHeight="10px" fontWeight={600} color="#FFF" />
        </span>
        {true ? (
          <KSpan text="Added" fontSize={12} lineHeight="12px" color="#1F1F1F" fontWeight={600} />
        ) : (
          <KSpan text="No File" fontSize={12} lineHeight="12px" color="#1F1F1F" fontWeight={600}></KSpan>
        )}
      </div>
      <div
        className="flex flex-row gap-1 whitespace-nowrap items-center"
        style={{
          opacity: true ? "1" : "0.3"
        }}
      >
        <span className="bg-[#30272C] px-0.5 py-1 flex items-center justify-center w-9 rounded-[3px]">
          <KSpan text="Dolby" fontSize={10} lineHeight="10px" fontWeight={600} color="#FFF" />
        </span>
        {true ? (
          <KSpan text="Added" fontSize={12} lineHeight="12px" color="#1F1F1F" fontWeight={600}></KSpan>
        ) : (
          <KSpan text="No File" fontSize={12} lineHeight="12px" color="#1F1F1F" fontWeight={600}></KSpan>
        )}
      </div>
    </div>
  ),
  arrowColor: "red",
  padding: "0px"
  //boxShadow: "3px 3px 10px #000",
  //borderRadius: "100px",
}
