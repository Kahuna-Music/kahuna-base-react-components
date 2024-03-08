import React from "react";
import "../../main.css"

export interface KTitleSpanProps {
  text: string
  fontSize?: number
  color?: string
  fontWeight?: number
  lineHeight?: string
  fontStyle?: string
  letterSpacing?: string
}

const KTitleSpan: React.FC<KTitleSpanProps> = (props) => {
  const fontSize = props.fontSize || 48
  const color = props.color || "#111111"
  const fontWeight = props.fontWeight || 700
  const lineHeight = props.lineHeight || "56px"
  const fontStyle = props.fontStyle || "normal"
  const letterSpacing = props.letterSpacing || "-0.48px"

  return (
    <span className={"k-title-span"} style={{fontSize, color, fontWeight, lineHeight, fontStyle, letterSpacing}}>
      {props.text}
    </span>
  );
};

export default KTitleSpan;