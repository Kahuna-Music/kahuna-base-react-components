import React, { useEffect, useRef, useState } from "react"
import "../../main.css"
import KTooltip from "../KTooltip"
import KSpan from "../KSpan"

export interface KEllipsisSpanProps {
  text: string
  fontSize?: number
  color?: string
  fontWeight?: number
  lineHeight?: string
  fontStyle?: string
  letterSpacing?: string
  textDecoration?: string
  ellipsis?: boolean
}

const KEllipsisSpan: React.FC<KEllipsisSpanProps> = (props) => {
  const fontSize = props.fontSize || 14
  const color = props.color || "#737373"
  const fontWeight = props.fontWeight || 400
  const lineHeight = props.lineHeight || "20px"
  const fontStyle = props.fontStyle || "normal"
  const letterSpacing = props.letterSpacing || "-0.084px"
  const textDecoration = props.textDecoration || "none"
  const ellipsis = props.ellipsis || false

  const ellipsisStyle = { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }

  const [isEllipsis, setIsEllipsis] = useState(false)
  const myTextRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const checkEllipsis = () => {
      if (myTextRef.current && ellipsis) {
        setIsEllipsis(myTextRef.current.scrollWidth > myTextRef.current.clientWidth)
        console.log("myTextRef:", myTextRef)
      }
    }

    checkEllipsis()
    window.addEventListener("resize", checkEllipsis)

    return () => {
      window.removeEventListener("resize", checkEllipsis)
    }
  }, [props.text, ellipsis])

  useEffect(() => {
    console.log("isEllipsis:", isEllipsis)
  }, [isEllipsis])

  return (
    <React.Fragment>
      {isEllipsis ? (
        <KTooltip
          padding="2px 4px"
          content={
            <div className="w-max">
              <KSpan text={props.text} color="#111" />
            </div>
          }
        >
          <span
            ref={myTextRef}
            className={`ellipsis-in ${ellipsis ? "block" : "flex items-center"}`}
            style={{
              fontSize,
              color,
              fontWeight,
              lineHeight,
              fontStyle,
              letterSpacing,
              textDecoration,
              ...(ellipsis && ellipsisStyle)
            }}
          >
            {props.text}
          </span>
        </KTooltip>
      ) : (
        <span
          ref={myTextRef}
          className={`out`}
          style={{
            fontSize,
            color,
            fontWeight,
            lineHeight,
            fontStyle,
            letterSpacing,
            textDecoration,
            ...(ellipsis && ellipsisStyle)
          }}
        >
          {props.text}
        </span>
      )}
    </React.Fragment>
  )
}

export default KEllipsisSpan
