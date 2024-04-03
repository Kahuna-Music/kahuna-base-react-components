import React, { useState } from "react"
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

  return props.hoverText ? (
    <div className="grid justify-items-center k-span-hover-div">
      <span className={"k-span"} style={{ fontSize, color, fontWeight, lineHeight, fontStyle, letterSpacing }}>
        {props.text}
      </span>
      <span
        className={"k-span-hover"}
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
    </div>
  ) : (
    <span className={"k-span"} style={{ fontSize, color, fontWeight, lineHeight, fontStyle, letterSpacing }}>
      {props.text}
    </span>
  )
}

export default KSpan
