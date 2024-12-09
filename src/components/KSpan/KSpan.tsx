import React, { CSSProperties, useState } from "react"
import "../../main.css"

export interface KSpanProps {
  text: string
  fontSize?: number | string
  color?: string
  fontWeight?: number
  lineHeight?: string
  fontStyle?: string
  letterSpacing?: string
  hoverStyle?: CSSProperties
  textDecoration?: string
  ellipsis?: boolean
}

const KSpan: React.FC<KSpanProps> = (props) => {
  const [onHover, setOnHover] = useState(false)

  const fontSize = props.fontSize || 14
  const color = props.color || "#737373"
  const fontWeight = props.fontWeight || 400
  const lineHeight = props.lineHeight || "20px"
  const fontStyle = props.fontStyle || "normal"
  const letterSpacing = props.letterSpacing || "-0.084px"
  const hoverStyle = props.hoverStyle || {}
  const textDecoration = props.textDecoration || "none"
  const ellipsis = props.ellipsis || false

  const ellipsisStyle = { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }

  const baseSpanStyle = {
    fontSize,
    color,
    fontWeight,
    lineHeight,
    fontStyle,
    letterSpacing,
    textDecoration,
    ...(ellipsis && ellipsisStyle)
  }

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

export default KSpan
