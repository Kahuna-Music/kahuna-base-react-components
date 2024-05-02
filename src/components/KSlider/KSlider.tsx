import React from "react"
import "../../main.css"
// @ts-ignore
import StepIcon from "../../assets/slider-step.svg"

export interface SliderOption {
  label: string
  value: number
}

export interface KSliderProps {
  options: SliderOption[]
  onChange: (option: SliderOption) => void
  value?: number
  disabled?: boolean
  width?: string
}

const KSlider: React.FC<KSliderProps> = (props) => {
  const disabled = props.disabled || false
  const width = props.width || "100%"
  const height = "8px"
  
  const calculateSpanWidth = ():number => {
    const min = props.options[0].value
    const max = props.options[props.options.length - 1].value
    const spanWidth = (props.value! - min) / (max - min) * 100 
    if (spanWidth >= 100 ) {
      return 99
    }
    return spanWidth
  }

  return (
    <div className="inline-block bg-[#E7E7E7] rounded-full relative z-0" style={{ width, height }}>
      <span className="w-full flex justify-between absolute top-0  z-0 items-center px-0.5" style={{ height }}>
        {props.options.map((option, index) => {
          return <img key={`step-icon-${index}`} src={StepIcon} className="w-1 h-1 !z-0 " />
        })}
      </span>
      <span
        className="block z-50 absolute top-0"
        style={{
          height,
          width: `${calculateSpanWidth()}%`,
          borderRadius: "10px",
          backgroundColor: "black"
        }}
      />
      <input
        disabled={disabled}
        style={{ width, height }}
        className={"k-slider-input absolute top-0 !z-50"}
        onChange={(e) => {
          const option = props.options.find((option) => option.value.toString() === e.target.value)
          if (option) return props.onChange(option)
        }}
        value={props.value}
        type="range"
        min={props.options[0].value}
        max={props.options[props.options.length - 1].value}
      />
    </div>
  )
};

export default KSlider;