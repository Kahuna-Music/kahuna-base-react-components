import React, { useState } from "react"
import "../../main.css"

export interface KTooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
  align?: "top" | "bottom" | "left" | "right" | "center"
  backgroundColor?: string
  width?: string
  height?: string
  zIndex?: number
  border?: string
  borderRadius?: string
  boxShadow?: string
  showArrow?: boolean
  arrowColor?: string
  padding?: string
  marginTop?: string // position and align is used to position the tooltip. for additional changes in vertical positioning use this prop
  marginLeft?: string // position and align is used to position the tooltip. for minor changes in horizontal positioning use this prop
}

const KTooltip: React.FC<KTooltipProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false)

  const showTooltip = () => setIsVisible(true)
  const hideTooltip = () => setIsVisible(false)

  const position = props.position || "top"
  const align = props.align || "center"
  const width = props.width || "auto"
  const height = props.height || "auto"
  const background = props.backgroundColor || "#FFF"
  const zIndex = props.zIndex || 999999
  const boxShadow = props.boxShadow || "none"
  const border = props.border || "1px solid #E5E7EB"
  const borderRadius = props.borderRadius || "5px"
  const arrowColor =
    props.arrowColor !== undefined
      ? props.arrowColor
      : props.backgroundColor !== undefined
      ? props.backgroundColor
      : "#F7F7F7"
  const showArrow = props.showArrow || false
  const padding = props.padding || "5px"

  const baseStyles = { width, height, background, zIndex, border, borderRadius, boxShadow }

  const absolutePositionClassName = (position: string, align: string) => {
    const finalPosition = position
    let finalAlign = align
    if (finalPosition === "top" || finalPosition === "bottom") {
      finalAlign = align === "top" || align === "bottom" ? "center" : align
    } else if (finalPosition === "left" || finalPosition === "right") {
      finalAlign = align === "left" || align === "right" ? "center" : align
    }
    return `k-tooltip-position-${finalPosition}-${finalAlign}`
  }

  return (
    <div className="relative box-border" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {props.children}

      <div
        className={`${absolutePositionClassName(position, align)} absolute ${
          isVisible ? "k-tooltip-enter" : "k-tooltip-exit"
        }`}
        style={{
          ...baseStyles,
          ...(props.marginTop && { marginTop: `${props.marginTop}` }),
          ...(props.marginLeft && { marginLeft: `${props.marginLeft}` })
        }}
      >
        <div
          style={{
            padding,
            borderRadius,
            background
          }}
        >
          {props.content}
        </div>
        {showArrow && <div className={`arrow-${position}`} style={{ backgroundColor: arrowColor, zIndex: -200 }}></div>}
      </div>
    </div>
  )
}

export default KTooltip
