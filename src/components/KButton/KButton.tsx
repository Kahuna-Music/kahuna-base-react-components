import React, { useState } from "react"
import "../../main.css"
import KSpan from "../KSpan"

export interface KButtonProps {
  onClick: () => void
  text?: string
  icon?: string
  rightIcon?: string
  leftIcon?: string
  background?: string
  borderRadius?: number
  width?: string
  height?: string
  disabled?: boolean
  textColor?: string
  padding?: string
  shadowDisabled?: boolean
  hoverBackground?: string
  fontWeight?: number
  textDecoration?: string
  gap?: string
}

const KButton: React.FC<KButtonProps> = (props) => {
  const [hover, setHover] = useState(false)

  const disabled = props.disabled || false
  const background = disabled ? "#F0F0F0" : props.background || "#F2FE67"
  const borderRadius = props.borderRadius || 10
  const width = props.width || "100%"
  const height = props.height || "44px"
  const textColor = disabled ? "#D6D6D6" : props.textColor || "#111"
  const padding = props.padding || "12px 16px"
  const boxShadow = props.shadowDisabled ? "" : "0 0 0 1px rgba(17, 17, 17, 0.04), 0 1px 1px 0 rgba(17, 17, 17, 0.04)"
  const hoverBackground = props.hoverBackground || background
  const fontWeight = props.fontWeight || 500
  const textDecoration = props.textDecoration || "none"
  const gap = props.gap || "0px"
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={"k-button"}
      disabled={disabled}
      onClick={props.onClick}
      style={{ background: hover ? hoverBackground : background, borderRadius, width, height, padding, boxShadow }}
    >
      <div className={"flex items-center"} style={{gap}}>
        {props.leftIcon && <img src={props.leftIcon} alt={"button-left-icon"} />}
        {props.text && (
          <KSpan text={props.text} color={textColor} fontWeight={fontWeight} textDecoration={textDecoration} />
        )}
        {props.icon && <img src={props.icon} alt={"button-icon"} />}
        {props.rightIcon && <img src={props.rightIcon} alt={"button-right-icon"} />}
      </div>
    </button>
  )
}

export default KButton
