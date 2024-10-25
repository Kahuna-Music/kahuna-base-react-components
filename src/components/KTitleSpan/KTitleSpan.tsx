import React from "react"
import "../../main.css"

export interface KTitleSpanProps {
  text: string
  fontSize?: number
  color?: string
  fontWeight?: number
  lineHeight?: string
  fontStyle?: string
  letterSpacing?: string
  bold?: boolean
  ellipsis?: boolean
}

const KTitleSpan: React.FC<KTitleSpanProps> = (props) => {
  const fontSize = props.fontSize || 48
  const color = props.color || "#111111"
  const lineHeight = props.lineHeight || "56px"
  const fontStyle = props.fontStyle || "normal"
  const letterSpacing = props.letterSpacing || "-0.48px"
  const bold = props.bold || false
  const titleClassName = bold ? "k-title-span-bold" : "k-title-span"
  const fontWeight = props.fontWeight ? props.fontWeight : bold ? 700 : 500
  const ellipsis = props.ellipsis || false
  const ellipsisStyle = { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }

  return (
    <span
      className={`${titleClassName} ${ellipsis ? "block" : "flex items-center"}`}
      style={{ fontSize, color, fontWeight, lineHeight, fontStyle, letterSpacing, ...(ellipsis && ellipsisStyle) }}
    >
      {props.text}
    </span>
  )
}

export default KTitleSpan
