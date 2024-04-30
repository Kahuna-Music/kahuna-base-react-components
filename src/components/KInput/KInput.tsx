import React, { useEffect, useState } from "react"
import "../../main.css"

export interface KInputProps {
  value: string
  onChange: (value: string) => void
  onBlur?: (value: string) => void
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
  type?: string
  leftIconClick?: () => void
  rightIconClick?: () => void
  accentColor?: string
  hoverBackground?: string
  padding?: string 
  gap?: string
  border?: string
  boxShadow?: string
}

const KInput: React.FC<KInputProps> = (props) => {
  const [background, setBackground] = useState("#F5F5F5")
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const emptyBackground = props.background || "#F5F5F5"
    const activeBackground = props.activeBackground || "#FFF"

    const background = props.value ? activeBackground : emptyBackground
    setBackground(background)
  }, [props.value])

  const width = props.width || "100%"
  const height = props.height || 24
  const borderRadius = props.borderRadius || 10
  const boxShadow = props.shadowDisabled ? "" : props.boxShadow ? props.boxShadow : "0 0 0 1px rgba(17, 17, 17, 0.04), 0 1px 1px 0 rgba(17, 17, 17, 0.04)"
  const type = props.type || "text"
  const accentColor = props.accentColor || ""
  const disabled = props.disabled || false
  const hoverBackground = props.hoverBackground || background
  const padding = props.padding || "12px 12px 12px 14px"
  const gap = props.gap || "8px"
  const border = props.border || "none"

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={"k-input-container"}
      style={{ background: hover ? hoverBackground : background, borderRadius, boxShadow, padding, gap, border }}
    >
      {props.leftIcon && (
        <img
          src={props.leftIcon}
          alt={"l-icon"}
          className={props.leftIconClick && "cursor-pointer"}
          onClick={() => {
            if (props.leftIconClick) props.leftIconClick()
          }}
        />
      )}

      <input
        type={type}
        className={"k-input"}
        style={{ background: hover ? hoverBackground : background, width, height, accentColor }}
        value={props.value}
        placeholder={props.placeholder || ""}
        disabled={disabled}
        onBlur={(event) => {
          if (props.onBlur) props.onBlur(event.target.value)
        }}
        onChange={(event) => {
          props.onChange(event.target.value)
        }}
      />

      {props.rightIcon && (
        <img
          src={props.rightIcon}
          alt={"r-icon"}
          className={props.rightIconClick && "cursor-pointer"}
          onClick={() => {
            if (props.rightIconClick) props.rightIconClick()
          }}
        />
      )}
    </div>
  )
}

export default KInput
