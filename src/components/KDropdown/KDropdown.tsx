import React, { useEffect, useState } from "react"
import "../../main.css"
import Select, { components, MultiValue } from "react-select"
// @ts-ignore
import CheckIcon from "../../assets/check.svg"
// @ts-ignore
import CloseIcon from "../../assets/close.svg"
// @ts-ignore
import CaretDownIcon from "../../assets/caret-down.svg"
import KSpan from "../KSpan"
import { FilterOptionOption } from "react-select/dist/declarations/src/filters"

export interface KSelectOption {
  label: string
  value: number
  type?: string
  label2?: string
  value2?: string
  icon?: string
  iconLabel?: string
}

export interface KDropdownProps {
  defaultValue?: KSelectOption | MultiValue<KSelectOption>
  defaultValuePrimitive?: string | number
  selected?: KSelectOption | MultiValue<KSelectOption>
  onSelect: (selected: KSelectOption | MultiValue<KSelectOption> | undefined) => void
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
  isClearable?: boolean
  isEllipsis?: boolean
  showOnlyIconsInMulti?: boolean
  menuWidth?: string | number
  menuLeftMargin?: number
  placeholderColor?: string
  addDropdownIndicator?: boolean
}

const KDropdown: React.FC<KDropdownProps> = (props) => {
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
  const isClearable = props.isClearable || false
  const isEllipsis = props.isEllipsis || false
  const showOnlyIconsInMulti = props.showOnlyIconsInMulti || false
  const showedIconsSize = 21
  const menuWidth = props.menuWidth || "100%"
  const menuLeftMargin = props.menuLeftMargin || 0
  const placeholderColor = props.placeholderColor || "#848484"
  const addDropdownIndicator = props.addDropdownIndicator || false

  let defaultValue = props.defaultValue
  if (!defaultValue && props.defaultValuePrimitive) {
    defaultValue = props.options.find(
      (option) => option.value === props.defaultValuePrimitive || option.value2 === props.defaultValuePrimitive
    )
  }

  const customFilterOption = (option: FilterOptionOption<KSelectOption>, inputValue: string) => {
    return option.data.label.toLocaleLowerCase("en").includes(inputValue.toLocaleLowerCase("en"))
  }

  const getOptionLabels = (option: KSelectOption) => {
    const isSelected = isMulti
      ? Array.isArray(selectedOption) && selectedOption.some((item) => item.value === option.value)
      : //@ts-ignore
        selectedOption?.value === option.value
    return (
      <div className="flex justify-between" style={{ width: "100%" }}>
        <div className="flex">
          {option?.iconLabel ? (
            <>
              <img src={option.iconLabel} className="mr-2" width={80} alt={"option-icon"} />
            </>
          ) : (
            <>
              {option.icon && <img src={option.icon} className="mr-2" width={20} alt={"option-icon"} />}
              <KSpan text={option.label} color="#111" />
            </>
          )}
        </div>
        {isSelected && ((isMulti && showOnlyIconsInMulti) || !isMulti) && (
          <img src={CheckIcon} width={24} alt={"check-icon"} />
        )}
      </div>
    )
  }

  const CustomMultiIconValue = (multiValueProps: any) => {
    const { data, ...restProps } = multiValueProps
    return (
      <div
        className={`bg-white rounded-full flex items-center justify-center ${!data.icon && "!hidden"} `}
        style={{ width: `${showedIconsSize + 2}px`, height: `${showedIconsSize + 2}px` }}
      >
        {data.icon && <img src={data.icon} width={showedIconsSize} height={showedIconsSize} />}
      </div>
    )
  }

  const CustomMultiValue = (multiValueProps: any) => {
    const { data, removeProps, ...restProps } = multiValueProps
    return (
      <div
        className="flex"
        style={{ border: "1px solid rgba(0,0,0, 0.1)", margin: 2, padding: 4, borderRadius: 5 }}
      >
        {data?.iconLabel ? (
          <div className={`flex ${isEllipsis ? "w-full" : ""}`}>
            <img src={data.iconLabel} width={80} alt={"option-icon"} />
          </div>
        ) : (
          <div className={`flex ${isEllipsis ? "w-full" : ""}`}>
            {data.icon && !hideIcon && <img src={data.icon} className="mr-2" width={20} alt={"data-icon"} />}
            <KSpan text={data.label} color="#111" ellipsis={isEllipsis} />
          </div>
        )}
        <img {...removeProps} src={CloseIcon} style={{ cursor: "pointer", marginLeft: "8px" }} />
      </div>
    )
  }

  const CustomDropdownIndicator = (props: any) => {
    return (
      <div style={{
        paddingLeft: gap
      }}>
        <img src={CaretDownIcon} alt="dropdown-arrow" width={20} />
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
        defaultValue={defaultValue}
        isMulti={isMulti}
        name={props.label || ""}
        placeholder={props.placeholder || ""}
        options={props.options}
        className={"k-dropdown"}
        filterOption={customFilterOption}
        isClearable={isClearable}
        hideSelectedOptions={!isMulti ? false : showOnlyIconsInMulti ? false : true}        
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            background: "transparent !important",
            padding: "0px !important",
            boxShadow: "none",
            fontSize: 14,
            lineHeight: "21px",
            cursor: "pointer",
            minHeight: "21px",
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
            paddingLeft: 3,
            width: menuWidth,
            left: menuLeftMargin
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
            padding: 0,
            position: "relative",
            ...(!props.width &&
              isMulti &&
              showOnlyIconsInMulti &&
              selectedOption && { width: `${(selectedOption as KSelectOption[]).length * 25 + 5}px`, minWidth: "50px" })
          }),
          input: (base) => ({
            ...base,
            padding: 0,
            margin: 0,
            height: "20px"
          }),
          placeholder: (base) => ({
            ...base,
            margin: 0,
            color: placeholderColor
          }),
          clearIndicator: (base) => ({
            ...base,
            padding: 0
          }),
          indicatorsContainer: (base) => ({
            ...base,
          })
        }}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: addDropdownIndicator ? CustomDropdownIndicator : () => null,
          SingleValue: ({ data, ...props }) =>
            data?.iconLabel ? (
              <div className={`flex ${isEllipsis ? "w-full" : ""}`}>
                <img src={data.iconLabel} width={80} alt={"option-icon"} />
              </div>
            ) : (
              <div className={`flex ${isEllipsis ? "w-full" : ""}`} style={{ position: "absolute" }}>
                {data.icon && !hideIcon && <img src={data.icon} className="mr-2" width={20} alt={"data-icon"} />}
                <KSpan text={data.label} color="#111" ellipsis={isEllipsis} />
              </div>
            ),
          ...{ MultiValue: showOnlyIconsInMulti ? CustomMultiIconValue : CustomMultiValue }
        }}
        onChange={(event) => {
          if (!event) {
            if (props.isClearable) {
              setSelectedOption(undefined)
              props.onSelect(undefined)
            }
            return
          }
          setSelectedOption(event)
          props.onSelect(event)
        }}
        //@ts-ignore
        getOptionLabel={(option: KSelectOption) => getOptionLabels(option)}
      />

      {props.rightIcon && <img src={props.rightIcon} width={20} alt={"r-icon"}/>}
    </div>
  )
}

export default KDropdown
