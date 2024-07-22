import React from "react";
import "../../main.css"

export interface KTitleSpanProps {
  text: string
  fontSize?: number
  color?: string
  fontWeight?: number
  lineHeight?: string
  fontStyle?: string
  letterSpacing?: string,
  bold?: boolean
}

const KTitleSpan: React.FC<KTitleSpanProps> = (props) => {
  const fontSize = props.fontSize || 48
  const color = props.color || "#111111"
  const fontWeight = props.fontWeight || 700
  const lineHeight = props.lineHeight || "56px"
  const fontStyle = props.fontStyle || "normal"
  const letterSpacing = props.letterSpacing || "-0.48px"
  const bold = props.bold || false
  const titleSpanClass = bold ? "k-title-span-bold" : "k-title-span"
  return (
    <span className={titleSpanClass} style={{fontSize, color, fontWeight, lineHeight, fontStyle, letterSpacing}}>
      {props.text}
    </span>
  );
};

export default KTitleSpan;