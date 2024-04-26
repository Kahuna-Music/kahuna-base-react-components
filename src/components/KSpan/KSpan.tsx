import React, { CSSProperties, useState } from "react"
import "../../main.css"

export interface KSpanProps {
  text: string
  fontSize?: number
  color?: string
  fontWeight?: number
  lineHeight?: string
  fontStyle?: string
  letterSpacing?: string
  hoverText?: string
  hoverTextColor?: string
  hoverStyle?: CSSProperties
}

const KSpan: React.FC<KSpanProps> = (props) => {
  const [onHover, setOnHover] = useState(false)

  const fontSize = props.fontSize || 14
  const color = props.color || "#737373"
  const fontWeight = props.fontWeight || 400
  const lineHeight = props.lineHeight || "20px"
  const fontStyle = props.fontStyle || "normal"
  const letterSpacing = props.letterSpacing || "-0.084px"
  const hoverTextColor = props.hoverTextColor || "#737373"
  const hoverStyle = props.hoverStyle || {}

  const renderBaseSpan = () => {
    const baseSpanStyle = { fontSize, color, fontWeight, lineHeight, fontStyle, letterSpacing }
    return (
      <span
        className={"k-span"}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        style={onHover ? { ...baseSpanStyle, ...hoverStyle } : { ...baseSpanStyle }}
      >
        {props.text}
      </span>
    )
  }

  return props.hoverText ? (
    <div className="grid justify-items-center">
      {renderBaseSpan()}
      {onHover && (
        <span
          className={"k-span"}
          style={{
            fontSize: fontSize - 2,
            color: hoverTextColor,
            fontWeight,
            lineHeight,
            fontStyle,
            letterSpacing
          }}
        >
          {props.hoverText}
        </span>
      )}
    </div>
  ) : renderBaseSpan()
}

export default KSpan
