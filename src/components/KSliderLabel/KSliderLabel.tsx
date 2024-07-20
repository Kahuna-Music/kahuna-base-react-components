import React, { useEffect, useRef, useState } from "react"
import "../../main.css"
//@ts-ignore
import ThumbIcon from "../../assets/slider-thumb.svg"
import KSpan from "../KSpan"

export interface SliderLabelOption {
  label: string
  value: number
}

export interface SliderLabelProps {
  options: SliderLabelOption[]
  onChange: (option: SliderLabelOption) => void
  value?: number
  disabled?: boolean
  width?: string
  titleText?: string
  valueText?: string
}

const KSliderLabel: React.FC<SliderLabelProps> = (props) => {
  const disabled = props.disabled || false
  const width = props.width || "100%"
  const height = "48px"

  const [titleFits, setTitleFits] = useState<boolean>(false)
  const [valueFits, setValueFits] = useState<boolean>(false)

  const titleTextRef = useRef<HTMLDivElement>(null)
  const valueTextRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const mainDivRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    if (!titleTextRef.current || !progressRef.current || !valueTextRef.current || !mainDivRef.current) return

    const titleWidth = titleTextRef.current.getBoundingClientRect().width
    const progressWidth = progressRef.current.getBoundingClientRect().width

    setTitleFits(titleWidth < progressWidth - 30)

    const valueWidth = valueTextRef.current.getBoundingClientRect().width
    const restWidth = mainDivRef.current.getBoundingClientRect().width - progressWidth

    setValueFits(valueWidth < restWidth)

  }, [props.value])

  const calculateSpanWidth = (): number => {
    const min = props.options[0].value
    const max = props.options[props.options.length - 1].value
    const spanWidth = ((props.value! - min) / (max - min)) * 100 * 0.95
    if (spanWidth >= 95) {
      return 100
    }
    return spanWidth + 5
  }

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className={"flex flex-row items-center justify-between z-[200]"}>
        <div
          ref={titleTextRef}
          className="relative pl-4"
          style={{
            top: titleFits ? "40px" : "0px"
          }}
        >
          <KSpan
            text={props.titleText || ""}
            color={"#000"}
            fontSize={14}
            lineHeight="20px"
            letterSpacing="-0.084px"
            fontWeight={500}
          />
        </div>
        <div
          ref={valueTextRef}
          className="relative pr-4"
          style={{
            top: valueFits ? "40px" : "0px"
          }}
        >
          <KSpan
            text={props.valueText || ""}
            color={"#000"}
            fontSize={14}
            lineHeight="20px"
            letterSpacing="-0.084px"
            fontWeight={500}
          />
        </div>
      </div>

      <div ref={mainDivRef} className="inline-block bg-[#f7f7f7] rounded-[8px] relative z-0" style={{ width, height }}>
        <span className="w-full flex justify-between absolute top-0  z-0 items-center" style={{ height }} />
        <span
          ref={progressRef}
          className="block items-center z-50 top-0 relative"
          style={{
            height,
            width: `calc(${calculateSpanWidth()}%)`,
            borderRadius: "8px",
            backgroundColor: "rgba(102, 102, 102, 0.05)"
          }}
        >
          <span className="flex justify-center h-4 w-4 absolute right-2 top-4 z-[1000]">
            <img src={ThumbIcon} alt="thumb" className="" />
          </span>
        </span>
        <input
          disabled={disabled}
          style={{ width, height }}
          className={"k-slider-label-input absolute top-0 !z-50"}
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
    </div>
  )
}

export default KSliderLabel