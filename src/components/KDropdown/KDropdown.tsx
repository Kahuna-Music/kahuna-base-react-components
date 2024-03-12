import React, {useEffect, useState} from "react";
import "../../main.css"
import Select, {MultiValue} from 'react-select'


export interface KSelectOption {
  label: string
  value: number
  type?: string
  label2?: string
  value2?: string
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
}

const KDropdown: React.FC<KDropdownProps> = (props) => {
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

  return (
    <div className={"k-dropdown-container"} style={{background, borderRadius, width, height, boxShadow}}>
      {props.leftIcon && <img src={props.leftIcon} width={24} className={"ml-2"} alt={"l-icon"}/>}

      <Select
        defaultValue={props.defaultValue}
        isMulti={isMulti}
        name={props.label || ""}
        placeholder={props.placeholder || ""}
        options={props.options}
        className={"k-dropdown"}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            background: "transparent !important",
            border: 0,
            boxShadow: "none",
            fontSize: 16,
            cursor: "pointer"
          }),
          singleValue: provided => ({
            ...provided,
            color: textColor
          })
        }}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => null
        }}
        onChange={(event) => {
          console.log(event)
          if (!event) {
            return
          }
          props.onSelect(event)
        }}
      />

      {props.rightIcon && <img src={props.rightIcon} width={24} className={"mr-2"} alt={"r-icon"}/>}
    </div>
  );
};

export default KDropdown;