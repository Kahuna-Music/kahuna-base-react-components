import React, { useEffect, useState } from "react"
import "../../main.css"
import Select, { MultiValue } from "react-select"
// @ts-ignore
import CheckIcon from "../../assets/check.svg"
import KSpan from "../KSpan"
import { FilterOptionOption } from "react-select/dist/declarations/src/filters"

export interface KSelectOption {
  label: string
  value: number
  type?: string
  label2?: string
  value2?: string
  icon?: string
}

export interface KDropdownProps {
  defaultValue?: KSelectOption | MultiValue<KSelectOption>
  selected?: KSelectOption | MultiValue<KSelectOption>
  onSelect: (selected: KSelectOption | MultiValue<KSelectOption>) => void
  options: KSelectOption[]
  width?: number
  height?: number
  leftIcon?: string
  rightIcon?: string
  background?: string
  activeBackground?: string
  borderRadius?: number
  placeholder?: string
  isMulti?: boolean
  label?: string
  textColor?: string
  shadowDisabled?: boolean
  menuBackground?: string
  padding?: string
  gap?: string
  hideChosenOptionIcon?: boolean
}

const KDropdownToggle: React.FC<KDropdownProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState<KSelectOption | MultiValue<KSelectOption>>()
  const [background, setBackground] = useState("#F5F5F5")
  
  useEffect(() => {
    const emptyBackground = props.background || "#F5F5F5"
    const activeBackground = props.activeBackground || "#FFF"

    const background = props.selected ? activeBackground : emptyBackground
    setBackground(background)
  }, [props.selected])

  const width = props.width || "100%"
  const height = props.height || "auto"
  const borderRadius = props.borderRadius || 10
  const isMulti = props.isMulti || false
  const textColor = props.textColor || "#111"
  const boxShadow = props.shadowDisabled ? "" : "0 0 0 1px rgba(17, 17, 17, 0.04), 0 1px 1px 0 rgba(17, 17, 17, 0.04)"
  const menuBackground = props.menuBackground || "rgb(249, 249, 249)"
  const padding = props.padding || "8px"
  const gap = props.gap || "4px"
  const hideIcon = props.hideChosenOptionIcon || false

  const customFilterOption = (option: FilterOptionOption<KSelectOption>, inputValue: string) => {
    return option.data.label.toLocaleLowerCase("en").includes(inputValue.toLocaleLowerCase("en"))
  }

  const getOptionLabels = (option: KSelectOption) => {
    return (
      <div className="flex justify-between" style={{ width: "100%" }}>
        <div className="flex">
          {option.icon && <img src={option.icon} className="mr-2" width={20} alt={"option-icon"} />}
          <KSpan text={option.label} color="#111" />
        </div>
        {
          //@ts-ignore
          !isMulti && selectedOption?.value === option.value && <img src={CheckIcon} width={24} alt={"check-icon"} />
        }
      </div>
    )
  }
  return (
    <div
      className={"k-dropdown-container"}
      style={{ background, borderRadius, width, height, boxShadow, padding, gap }}
    >
      {props.leftIcon && <img src={props.leftIcon} width={20} alt={"l-icon"} />}

      <Select
        defaultValue={props.defaultValue}
        isMulti={isMulti}
        name={props.label || ""}
        placeholder={props.placeholder || ""}
        options={props.options}
        className={"k-dropdown"}
        filterOption={customFilterOption}
        isClearable
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            background: "transparent !important",
            padding: "0px !important",
            boxShadow: "none",
            fontSize: 14,
            lineHeight: "20px",
            cursor: "pointer",
            minHeight: "20px",
            border: "none"
          }),
          menu: (base) => ({
            ...base,
            borderRadius: 10,
            background: menuBackground,
            boxShadow:
              "0px 3px 3px 0px rgba(17, 17, 17, 0.03), 0px 1px 1px 0px rgba(17, 17, 17, 0.04), 0px 0px 0px 1px rgba(17, 17, 17, 0.04)",
            backdropFilter: "blur(2px)",
            paddingRight: 3,
            paddingLeft: 3
          }),
          menuList: (base) => ({
            ...base,
            paddingTop: 0,
            paddingBottom: 0
          }),
          singleValue: (provided) => ({
            ...provided,
            color: textColor
          }),
          option: (provided, state) => ({
            ...provided,
            display: "flex",
            alignItems: "center",
            background: "white",
            marginBottom: 4,
            marginTop: 4,
            borderRadius: 10,
            color: "#111"
          }),
          valueContainer: (base) => ({
            ...base,
            padding: 0
          }),
          input: (base) => ({
            ...base,
            padding: 0,
            margin: 0,
            height: "20px"
          }),
          placeholder: (base) => ({
            ...base,
            margin: 0
          }),
          clearIndicator:(base) => ({
            ...base,
            padding: 0
          })

        }}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => null,
          SingleValue: ({ data, ...props }) => (
            <div className="flex" style={{ position: "absolute" }}>
              {data.icon && !hideIcon && <img src={data.icon} className="mr-2" width={20} alt={"data-icon"} />}
              <KSpan text={data.label} color="#111" />
            </div>
          )
        }}
        onChange={(event) => {
          if (!event) {
            setSelectedOption(undefined)
            return
          } else {
            setSelectedOption(event)
          }
           props.onSelect(event)
        }}
        //@ts-ignore
        getOptionLabel={(option: KSelectOption) => getOptionLabels(option)}
      />

      {props.rightIcon && <img src={props.rightIcon} width={20} alt={"r-icon"} />}
    </div>
  )
}

export default KDropdownToggle
