import React, { useEffect, useState, KeyboardEvent, useRef } from "react"
import "../../main.css"

export interface KTextAreaProps {
  value: string
  onChange: (value: string) => void
  rows?: number
  onBlur?: (value: string) => void
  onKeyDown?: (event: KeyboardEvent) => void
  width?: number
  height?: number
  leftIcon?: string
  rightIcon?: string
  background?: string
  activeBackground?: string
  borderRadius?: number
  disabled?: boolean
  placeholder?: string
  shadowDisabled?: boolean
  leftIconClick?: () => void
  rightIconClick?: () => void
  accentColor?: string
  hoverBackground?: string
  padding?: string
  gap?: string
  border?: string
  boxShadow?: string
  fontSize?: string
  iconSize?: string
  checked?: boolean
  maxHeight?: number
  clearTextOnPressedEnter?: boolean
}

const KTextArea: React.FC<KTextAreaProps> = (props) => {
  const [background, setBackground] = useState("#F5F5F5")
  const [hover, setHover] = useState(false)

  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const emptyBackground = props.background || "#F5F5F5"
    const activeBackground = props.activeBackground || "#FFF"

    const background = props.value ? activeBackground : emptyBackground
    setBackground(background)
  }, [props.value])

  const width = props.width || "100%"
  const height = props.height || 60
  const borderRadius = props.borderRadius || 10
  const boxShadow = props.shadowDisabled
    ? ""
    : props.boxShadow
    ? props.boxShadow
    : "0 0 0 1px rgba(17, 17, 17, 0.04), 0 1px 1px 0 rgba(17, 17, 17, 0.04)"
  const accentColor = props.accentColor || ""
  const disabled = props.disabled || false
  const hoverBackground = props.hoverBackground || background
  const padding = props.padding || "8px"
  const gap = props.gap || "12px"
  const border = props.border || "none"
  const fontSize = props.fontSize || "14px"
  const iconSize = props.iconSize || "20px"
  const rows = props.rows || 1

  const autoResize = props.maxHeight && props.maxHeight !== props.height
  const maxHeight = props.maxHeight || 200
  const clearTextOnPressedEnter = props.clearTextOnPressedEnter || false

  const handleInput = () => {
    if (textAreaRef.current) {
      const textarea = textAreaRef.current
      textarea.style.height = "auto"
      textarea.style.height = `${textarea.scrollHeight}px` // Set the height to scrollHeight
    }
  }

  useEffect(() => {
    if (autoResize) {
      handleInput()
    }
  }, [])

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={"k-input-container"}
      style={{ background: hover ? hoverBackground : background, borderRadius, boxShadow, padding, gap, border }}
    >
      {props.leftIcon && (
        <img
          src={props.leftIcon}
          style={{
            width: iconSize,
            height: iconSize
          }}
          alt={"l-icon"}
          className={props.leftIconClick && "cursor-pointer"}
          onClick={() => {
            if (props.leftIconClick) props.leftIconClick()
          }}
        />
      )}

      <textarea
        ref={textAreaRef}
        className={"k-input"}
        style={{
          background: hover ? hoverBackground : background,
          width,
          height,
          accentColor,
          fontSize,
          overflow: autoResize ? "hidden" : "auto",
          minHeight: height,
          resize: autoResize ? "none" : "vertical",
          ...(autoResize && { maxHeight })
        }}
        value={props.value}
        rows={rows}
        placeholder={props.placeholder || ""}
        disabled={disabled}
        onBlur={(event) => {
          if (props.onBlur) props.onBlur(event.target.value)
        }}
        onChange={(event) => {
          if (autoResize) {
            handleInput()
          }

          props.onChange(event.target.value)
        }}
        onKeyDown={(event) => {
          if (props.onKeyDown) props.onKeyDown(event)

          if (event.key === "Enter") {
            if (event.shiftKey) {
              return
            } else if (textAreaRef.current && clearTextOnPressedEnter) {
              event.preventDefault()
              const textAreaComponent = textAreaRef.current
              textAreaComponent.style.height = "auto"
              textAreaComponent.style.height = `${height}px`
              textAreaComponent.value = ""
            } else {
              event.preventDefault()
            }
          }
        }}
      />

      {props.rightIcon && (
        <img
          src={props.rightIcon}
          style={{
            width: iconSize,
            height: iconSize
          }}
          alt={"r-icon"}
          className={props.rightIconClick && "cursor-pointer"}
          onClick={() => {
            if (props.rightIconClick) props.rightIconClick()
          }}
        />
      )}
    </div>
  )
}

export default KTextArea
