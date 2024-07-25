import React, { useEffect, useState, KeyboardEvent, useRef } from "react"
import "../../main.css"

export interface KCodeInputProps {
  value: string
  length: number
  onChange: (value: string) => void
  width?: number
  height?: number
  background?: string
  activeBackground?: string
  borderRadius?: number
  disabled?: boolean
  hoverBackground?: string
  padding?: string
  gap?: string
  fontSize?: string
  border?: string
  sendImmediately?: boolean
  allowedCharacters?: "numeric" | "alphaNumeric" | "alpha"
  inputWidth?: number
  inputHeight?: number
  autoFocus?: boolean
  password?: boolean
}

const KInput: React.FC<KCodeInputProps> = (props) => {
  const autoFocus = props.autoFocus || false

  const [focusedIndex, setFocusedIndex] = useState<number>(autoFocus ? 0 : -1)
  const inputRefs = useRef<HTMLInputElement[]>([])

  const width = props.width || "100%"
  const height = props.height || 20
  const borderRadius = props.borderRadius || 10
  const disabled = props.disabled || false
  const gap = props.gap || "12px"
  const fontSize = props.fontSize || "30px"
  const length = props.length || 6
  const border = props.border || "1px solid #000"
  const sendImmediately = props.sendImmediately || false
  const allowedCharacters = props.allowedCharacters || "numeric" // only numeric for default case
  const inputWidth = props.inputWidth || "60px"
  const inputHeight = props.inputHeight || "60px"
  const background = props.background || "#F5F5F5"
  const password = props.password || false

  const [values, setValues] = useState<string[]>(Array(length).fill(""))

  useEffect(() => {
    // Focus the input at focusedIndex whenever it changes
    console.log("Focused index:", focusedIndex)
    if (inputRefs.current[focusedIndex]) {
      inputRefs.current[focusedIndex].focus()
    }
  }, [focusedIndex])

  const handleClick = (index: number) => {
    event.preventDefault()
    if (values[index]) {
      const updatedArray = values.map((value, i) => (i >= index ? "" : value))
      setValues(updatedArray)
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
      newValues[index] = text
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
        newValues[index - 1] = ""
        setFocusedIndex(index - 1)
      }
      setValues(newValues)
    }
  }

  useEffect(() => {
    const allDone = values.every((value) => value.length > 0)
    if (sendImmediately && allDone) {
      console.log(values.join(""))
    }
    props.onChange(values.join(""))
  }, [values])

  const renderCharacterComponent = (index: number) => {
    return (
      <input
        key={`k-code-input-${index}`}
        className="k-code-input-character-container hover:border-['1px solid red']"
        style={{
          background,
          borderRadius,
          width: inputWidth,
          height: inputHeight
        }}
        required
        type={password ? "password" : "text"}
        value={values[index]}
        maxLength={1}
        onChange={(event) => {
          handleChange(event.target.value, index)
        }}
        onClick={(event) => {
          handleClick(index)
        }}
        onKeyDown={(event) => {
          handleDelete(event, index)
        }}
        ref={(el: HTMLInputElement) => (inputRefs.current[index] = el)}
        disabled={disabled}
      />
    )
  }

  return (
    <div className="flex flex-row justify-between items-center" style={{ gap, width: "100%" }}>
      {Array.from({ length }, (_, index) => renderCharacterComponent(index))}
    </div>
  )
}

export default KInput
