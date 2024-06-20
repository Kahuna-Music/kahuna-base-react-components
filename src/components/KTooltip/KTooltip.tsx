import React, { useState } from "react"
import "../../main.css"

export interface KTooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  position?: string
  backgroundColor?: string
  width?: string
  height?: string
  zIndex?: number
  border: string
  borderRadius?: string
  boxShadow?: string
  showArrow?: boolean
  arrowColor?: string
}

const KTooltip: React.FC<KTooltipProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false)

  const showTooltip = () => setIsVisible(true)
  const hideTooltip = () => setIsVisible(false)

  const position = props.position || "top"
  const width = props.width || "auto"
  const height = props.height || "auto"
  const background = props.backgroundColor || "#F7F7F7"
  const zIndex = props.zIndex || 999999
  const boxShadow = props.boxShadow || "none"
  const border = props.border || "none"
  const borderRadius = props.borderRadius || "4px"
  const arrowColor = props.arrowColor ? props.arrowColor : props.backgroundColor ? props.backgroundColor : "#F7F7F7"
  const showArrow = props.showArrow || false

  const baseStyles = { width, height, background, zIndex, border, borderRadius, boxShadow }
  return (
    <div
      className="relative"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {props.children}
      {isVisible && (
        <div className={`k-tooltip-${position} absolute`} style={baseStyles}>
          {props.content}
          {showArrow && <div className={`arrow-${position}`} style={{backgroundColor:arrowColor}}></div>}
        </div>
      )}
    </div>
  )
}

export default KTooltip
