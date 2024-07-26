import React, { useEffect, useState, KeyboardEvent, useRef } from "react"
import "../../main.css"

export interface KCodeInputProps {
  onChange: (value: string) => void
  length?: number
  borderRadius?: number
  disabled?: boolean
  padding?: string
  gap?: number
  fontSize?: string
  fontWeight?: string
  color?: string
  lineHeight?: string
  allowedCharacters?: "numeric" | "alphaNumeric" | "alpha"
  width?: number
  height?: number
  autoFocus?: boolean
  isPassword?: boolean
  background?: string
  hoverBackground?: string
  focusedBackground?: string
  filledBackground?: string
  border?: string
  hoverBorder?: string
  focusedBorder?: string
  filledBorder?: string
  boxShadow?: string
  hoverBoxShadow?: string
  focusedBoxShadow?: string
  filledBoxShadow?: string
  fitInContainer?: boolean
  isCodeCorrect?: boolean
  autoBlur?: boolean
}

const KInput: React.FC<KCodeInputProps> = (props) => {
  const autoFocus = props.autoFocus || false
  const autoBlur = props.autoBlur || false
  const borderRadius = props.borderRadius || 10
  const disabled = props.disabled || false
  const length = props.length || 6
  const padding = props.padding || "6px"
  const gap = props.gap || 6
  const allowedCharacters = props.allowedCharacters || "numeric"
  const password = props.isPassword || false
  const fitInContainer = props.fitInContainer || false
  const width = props.width || "60px"
  const height = props.height || "60px"
  const fontSize = props.fontSize || "24px"
  const fontWeight = props.fontWeight || 500
  const lineHeight = props.lineHeight || "32px"
  const defaultBorder = props.border || ""
  const hoverBorder = props.hoverBorder || "1px solid #F3F3F3"
  const focusedBorder = props.focusedBorder || "1px solid #F3F3F3"
  const filledBorder = props.filledBorder || "1px solid  #B7B7B7"
  const defaultBoxShadow = props.boxShadow || ""
  const hoverBoxShadow = props.hoverBoxShadow || ""
  const focusedBoxShadow = props.focusedBoxShadow || " 0px 1px 2px 0px rgba(228, 229, 231, 0.24)"
  const filledBoxShadow = props.filledBoxShadow || " 0px 1px 2px 0px rgba(228, 229, 231, 0.24)"
  const defaultBackground = props.background || "#F5F5F5"
  const hoverBackground = props.hoverBackground || defaultBackground
  const focusedBackground = props.focusedBackground || "#FFF"
  const filledBackground = props.filledBackground || "#FFF"
  const color = props.color || "#000"
  const isCodeCorrect = props.isCodeCorrect !== undefined ? props.isCodeCorrect : true

  const [focusedIndex, setFocusedIndex] = useState<number>(autoFocus ? 0 : -1)
  const inputRefs = useRef<HTMLInputElement[]>([])

  const [allCharactersWritten, setAllCharactersWritten] = useState<boolean>(false)

  const [values, setValues] = useState<string[]>(Array(length).fill(""))
  const [hoveredIndexes, setHoveredIndexes] = useState<boolean[]>(Array(length).fill(false))
  const [focusedIndexes, setFocusedIndexes] = useState<boolean[]>(Array(length).fill(false))

  const handleMouseEnter = (index: number) => {
    setHoveredIndexes((prev) => prev.map((hovered, i) => (i === index ? true : hovered)))
  }

  const handleMouseLeave = (index: number) => {
    setHoveredIndexes((prev) => prev.map((hovered, i) => (i === index ? false : hovered)))
  }

  const handleFocus = (index: number) => {
    setFocusedIndexes((prev) => prev.map((focused, i) => (i === index ? true : focused)))
  }
  const handleBlur = (index: number) => {
    setFocusedIndexes((prev) => prev.map((focused, i) => (i === index ? false : focused)))
  }

  useEffect(() => {
    if (inputRefs.current[focusedIndex]) {
      inputRefs.current[focusedIndex].focus()
    }
  }, [focusedIndex])

  useEffect(() => {
    if (disabled) {
      setFocusedIndexes((prev) => prev.map((focused, i) => false))
      setHoveredIndexes((prev) => prev.map((hovered, i) => false))
      setValues(Array(length).fill(""))
      setAllCharactersWritten(false)
    }
  }, [disabled])

  const handleClick = (index: number) => {
    if (values[index]) {
      setFocusedIndex(index)
    } else if (!values[index]) {
      const firstEmptyInputIndex = values.findIndex((value) => value === "")
      setFocusedIndex(firstEmptyInputIndex)
      if (inputRefs.current[focusedIndex]) {
        inputRefs.current[focusedIndex].focus()
      }
    }
  }

  const handleChange = (text: string, index: number) => {
    const patterns: Record<string, RegExp> = {
      numeric: /^\d*$/,
      alpha: /^[a-zA-Z]*$/,
      alphaNumeric: /^[a-zA-Z0-9]*$/
    }

    if (patterns[allowedCharacters]?.test(text)) {
      const newValues = [...values]
      if (text.length === 1) {
        newValues[index] = text
      } else if (text.length === 2) {
        newValues[index] = newValues[index] === text[0] ? text[1] : text[0]
      }
      setValues(newValues)
      if (text && index < length - 1) {
        setFocusedIndex(index + 1)
      }
    }
  }

  const handleDelete = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event?.key === "Backspace") {
      const newValues = [...values]
      newValues[index] = ""
      if (index > 0) {
        setFocusedIndex(index - 1)
      }
      setValues(newValues)
    }
  }

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    const pastedText = event.clipboardData.getData("text").replace(/\s+/g, "")
    const patterns: Record<string, RegExp> = {
      numeric: /^\d*$/,
      alpha: /^[a-zA-Z]*$/,
      alphaNumeric: /^[a-zA-Z0-9]*$/
    }
    if (patterns[allowedCharacters]?.test(pastedText) && pastedText.length > 0) {
      const newValues = [...values]
      const currentIndex = focusedIndex
      const pastedCharacters = pastedText.includes(" ") ? pastedText.split(" ") : pastedText.split("")
      pastedCharacters.forEach((character, index) => {
        const i = currentIndex + index
        if (i < length) {
          newValues[i] = character
        }
      })
      setValues(newValues)
      setFocusedIndex(
        pastedCharacters.length + currentIndex >= length ? length - 1 : pastedCharacters.length + currentIndex
      )
    }
  }

  useEffect(() => {
    const allDone = values.every((value) => value.length > 0)
    setAllCharactersWritten(allDone)

    if (allDone && autoBlur) {
      inputRefs.current[focusedIndex].blur()
    }

    props.onChange(values.join(""))
  }, [values])

  const renderCharacterComponent = (index: number) => {
    const isHovered = hoveredIndexes[index]
    const isFocused = focusedIndexes[index]
    const isFilled = values[index]

    const background = isFilled
      ? filledBackground
      : isFocused
      ? focusedBackground
      : isHovered
      ? hoverBackground
      : defaultBackground

    const boxShadow = isFilled
      ? filledBoxShadow
      : isFocused
      ? focusedBoxShadow
      : isHovered
      ? hoverBoxShadow
      : defaultBoxShadow

    const border = isFilled ? filledBorder : isFocused ? focusedBorder : isHovered ? hoverBorder : defaultBorder

    return (
      <input
        key={`k-code-input-${index}`}
        value={values[index]}
        className={`k-code-input-character-container`}
        style={{
          padding,
          background,
          borderRadius,
          height,
          border: allCharactersWritten && !isCodeCorrect ? "1px solid #FF5865" : border,
          boxShadow,
          fontSize,
          fontWeight,
          lineHeight,
          color,
          width: !fitInContainer ? width : `calc((100% - ${(length - 1) * gap}px) / ${length})`
        }}
        required
        type={password ? "password" : "text"}
        onChange={(event) => {
          handleChange(event.target.value, index)
        }}
        onClick={(event) => {
          handleClick(index)
        }}
        onKeyDown={(event) => {
          handleDelete(event, index)
        }}
        onPaste={(event) => {
          handlePaste(event)
        }}
        ref={(el: HTMLInputElement) => (inputRefs.current[index] = el)}
        disabled={disabled}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave(index)}
        onFocus={() => handleFocus(index)}
        onBlur={() => handleBlur(index)}
      />
    )
  }

  return (
    <div className="flex flex-row items-center justify-between" style={{ width: "100%", gap }}>
      {Array.from({ length }, (_, index) => renderCharacterComponent(index))}
    </div>
  )
}

export default KInput
