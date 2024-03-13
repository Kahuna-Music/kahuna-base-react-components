import React from "react";
import "../../main.css"

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

  return (
    <input
      disabled={disabled}
      style={{width}}
      className={"k-slider-input"}
      onChange={(e) => {
        const option = props.options.find((option) => option.value.toString() === e.target.value)
        if (option) return props.onChange(option)
      }}
      value={props.value}
      type="range"
      min={props.options[0].value}
      max={props.options[props.options.length - 1].value}
    />
  );
};

export default KSlider;