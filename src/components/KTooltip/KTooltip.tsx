import React, { useState } from "react"
import "../../main.css"

export interface KTooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  position?: string
  open?: boolean
  backgroundColor?: string
  width?: string
  height?: string
  zIndex?: number
  border: string
  borderRadius?: string
  boxShadow?: string
  showArrow?: boolean
  arrowColor?: string
  padding?: string
}

const KTooltip: React.FC<KTooltipProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false)

  const showTooltip = () => setIsVisible(true)
  const hideTooltip = () => setIsVisible(false)

  const position = props.position || "top"
  const open = props.open || false
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
  const showTheTooltip = props.open !== undefined ? props.open : isVisible

  const baseStyles = { width, height, background, zIndex, border, borderRadius, boxShadow }
  return (
    <div
      className="relative box-border"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {props.children}
      {showTheTooltip && (
        <div className={`k-tooltip-${position} absolute`} style={baseStyles}>
          <div
            style={{
              padding: padding,
              borderRadius,
              background
            }}
          >
            {props.content}
          </div>
          {showArrow && (
            <div className={`arrow-${position}`} style={{ backgroundColor: arrowColor, zIndex: -200 }}></div>
          )}
        </div>
      )}
    </div>
  )
}

export default KTooltip
