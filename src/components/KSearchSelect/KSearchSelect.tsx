import React, { useEffect, useState, KeyboardEvent, useRef } from "react"
import "../../main.css"
import { KSelectOption } from "../KDropdown/KDropdown"
import KSpan from "../KSpan"
//@ts-ignore
import CloseIcon from "../../assets/close.svg"
// @ts-ignore
import CheckIcon from "../../assets/check.svg"

export interface KSearchSelectProps {
  //value: string
  onChange: (value: string) => void
  onBlur?: (value: string) => void
  onKeyDown?: (event: KeyboardEvent) => void
  selectedOption: KSelectOption | undefined
  width?: number
  height?: number
  leftIcon?: string
  rightIcon?: string
  background?: string
  activeBackground?: string
  borderRadius?: number
  disabled?: boolean
  placeholder?: string
  shadowDisabled?: boolean
  leftIconClick?: () => void
  rightIconClick?: () => void
  hoverBackground?: string
  padding?: string
  gap?: string
  border?: string
  boxShadow?: string
  fontSize?: string
  iconSize?: string
  hoverBorder?: string
  activeBorder?: string
  onTextChange: (value: string) => void
  onSelect: (value: KSelectOption) => void
  options: KSelectOption[]
  optionIconSize?: number
  optionFontSize?: number
  optionColor?: string
  maxMenuHeight?: number
}

const KSearchSelect: React.FC<KSearchSelectProps> = (props) => {
  const [background, setBackground] = useState("#F5F5F5")
  const [border, setBorder] = useState("none")
  const [hover, setHover] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<KSelectOption | undefined>(props.selectedOption)
  const [value, setValue] = useState(props.selectedOption?.label || "")

  useEffect(() => {
    setSelected(props.selectedOption)
    setValue(props.selectedOption?.label || "")
  }, [props.selectedOption])

  useEffect(() => {
    const emptyBackground = props.background || "#F5F5F5"
    const activeBackground = props.activeBackground || "#FFF"
    const emptyBorder = props.border || "none"
    const activeBorder = props.activeBorder || emptyBorder

    const background = value ? activeBackground : emptyBackground
    const border = value ? activeBorder : emptyBorder
    setBackground(background)
    setBorder(border)
  }, [value])

  const width = props.width || "100%"
  const height = props.height || 20
  const borderRadius = props.borderRadius || 10
  const boxShadow = props.shadowDisabled
    ? ""
    : props.boxShadow
    ? props.boxShadow
    : "0 0 0 1px rgba(17, 17, 17, 0.04), 0 1px 1px 0 rgba(17, 17, 17, 0.04)"
  const disabled = props.disabled || false
  const hoverBackground = props.hoverBackground || background
  const padding = props.padding || "8px"
  const gap = props.gap || "12px"
  const fontSize = props.fontSize || "14px"
  const iconSize = props.iconSize || "20px"
  const hoverBorder = props.hoverBorder || border
  const optionIconSize = props.optionIconSize || 20
  const optionColor = props.optionColor || "#111"
  const optionFontSize = props.optionFontSize || 14

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node) && !menuRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])
  
  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={"k-input-container flex relative"}
      style={{
        background: hover ? hoverBackground : background,
        borderRadius,
        boxShadow,
        padding,
        gap,
        border: hover ? hoverBorder : border,
        width
      }}
    >
      {props.leftIcon && (
        <img
          src={props.leftIcon}
          style={{
            width: iconSize,
            height: iconSize
          }}
          alt={"l-icon"}
          className={props.leftIconClick && "cursor-pointer"}
          onClick={() => {
            if (props.leftIconClick) props.leftIconClick()
          }}
        />
      )}

      <input
        type={"text"}
        className={"k-search-select w-full"}
        style={{
          background: hover ? hoverBackground : background,
          height,
          fontSize
        }}
        value={value}
        placeholder={props.placeholder || ""}
        disabled={disabled}
        onBlur={(event) => {
          //setOpen(false)
          if (props.onBlur) props.onBlur(event.target.value)
        }}
        onFocus={(event) => {
          setOpen(true)
        }}
        onChange={(event) => {
          if (!event.target.value) {
            setOpen(false)
          } else {
            setOpen(true)
          }
          setValue(event.target.value)
          props.onChange(event.target.value)
        }}
        onKeyDown={(event) => {
          if (props.onKeyDown) props.onKeyDown(event)
        }}
      />

      {value && (
        <img
          src={CloseIcon}
          style={{
            width: iconSize,
            height: iconSize
          }}
          alt={"r-icon"}
          className={"cursor-pointer hover:bg-[#F3F3F3] hover:scale-110 rounded-full"}
          onClick={() => {
            setValue("")
            setOpen(false)
          }}
        />
      )}
      {props.options && props.options.length > 0 && open && (
        <div
          className="k-search-select-menu flex flex-col gap-1 absolute left-0 p-[3px] bg-[#F9F9F9]"
          style={{
            top: "calc(100% + 8px)",
            width,
            boxShadow,
            borderRadius: "10px",
            overflow: "auto",
            ...(props.maxMenuHeight && { maxHeight: props.maxMenuHeight })
          }}
          ref={menuRef}
        >
          {props.options.map((option, index) => {
            return (
              <div
                key={`${option.label}-${index}`}
                className="flex items-center flex-row justify-between px-2 py-1.5 bg-[#FFF] rounded-[10px] hover:bg-[#F7F7F7] cursor-pointer"
                onClick={() => {
                  setOpen(false)
                  setValue(option.label)
                  setSelected(option)
                  props.onSelect(option)
                }}
              >
                <div className="flex flex-row gap-1.5 items-center">
                  {option.icon && (
                    <img className="shrink-0" src={option.icon} width={optionIconSize} height={optionIconSize} />
                  )}
                  <KSpan
                    text={option.label}
                    fontSize={optionFontSize}
                    color={optionColor}
                    lineHeight={`${optionFontSize + 4}px`}
                  />
                </div>
                {selected?.label === option.label && (
                  <div className="flex items-center shrink-0">
                    <img src={CheckIcon} width={20} height={20} className="shrink-0" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default KSearchSelect
