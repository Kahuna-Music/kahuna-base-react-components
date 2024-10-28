import React, { useEffect, useRef, useState } from "react"
import "../../main.css"
import KTooltip from "../KTooltip"
import KSpan from "../KSpan"

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

  const [isEllipsis, setIsEllipsis] = useState(false)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const checkEllipsis = () => {
      if (textRef.current) {
        setIsEllipsis(textRef.current.scrollWidth > textRef.current.clientWidth)
      }
    }

    checkEllipsis()
    window.addEventListener("resize", checkEllipsis)

    return () => {
      window.removeEventListener("resize", checkEllipsis)
    }
  }, [props.text, ellipsis])

  return (
    <React.Fragment>
      {isEllipsis ? (
        <KTooltip
          height="auto"
          padding="2px 4px"
          content={
            <div className="w-max">
              <KSpan text={props.text} color="#111" />
            </div>
          }
        >
          <span
            ref={textRef}
            className={`${titleClassName} ${ellipsis ? "block" : "flex items-center"}`}
            style={{
              fontSize,
              color,
              fontWeight,
              lineHeight,
              fontStyle,
              letterSpacing,
              ...(ellipsis && ellipsisStyle)
            }}
          >
            {props.text}
          </span>
        </KTooltip>
      ) : (
        <span
          ref={textRef}
          className={`${titleClassName} ${ellipsis ? "block" : "flex items-center"}`}
          style={{ fontSize, color, fontWeight, lineHeight, fontStyle, letterSpacing, ...(ellipsis && ellipsisStyle) }}
        >
          {props.text}
        </span>
      )}
    </React.Fragment>
  )
}

export default KTitleSpan
