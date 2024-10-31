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
  textDecoration?: string,
  ellipsis?: boolean
}

const KSpan: React.FC<KSpanProps> = (props) => {

  const fontSize = props.fontSize || 14
  const color = props.color || "#737373"
  const fontWeight = props.fontWeight || 400
  const lineHeight = props.lineHeight || "20px"
  const fontStyle = props.fontStyle || "normal"
  const letterSpacing = props.letterSpacing || "-0.084px"
  const textDecoration = props.textDecoration || "none"
  const ellipsis = props.ellipsis || false

  const ellipsisStyle = {overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}

  return (
    <span
    className={"k-span"}
    style={{ fontSize, color, fontWeight, lineHeight, fontStyle, letterSpacing, textDecoration, ...(ellipsis && ellipsisStyle)}}
  >
    {props.text}
  </span>
  )
}

export default KSpan