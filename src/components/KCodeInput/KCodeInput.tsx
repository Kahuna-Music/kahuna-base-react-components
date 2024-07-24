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
  fontSize?: string,
  border?: string,
  sendImmediately?: boolean,
  isAlphaNumeric?: boolean,
  inputWidth?: number
  inputHeight?: number
}

const KInput: React.FC<KCodeInputProps> = (props) => {

  const [focusedIndex, setFocusedIndex] = useState<number>(0)
  const inputRefs = useRef<HTMLInputElement[]>([])



  const width = props.width || "100%"
  const height = props.height || 20
  const borderRadius = props.borderRadius || 10
  const disabled = props.disabled || false
  const padding = props.padding || "8px"
  const gap = props.gap || "12px"
  const fontSize = props.fontSize || "30px"
  const length = props.length || 6
  const border = props.border || "1px solid #000"
  const sendImmediately = props.sendImmediately || false
  const isAlphaNumeric =  props.isAlphaNumeric  || false  // only numeric for default case
  const inputWidth = props.inputWidth || "60px"
  const inputHeight = props.inputHeight || "60px"
  const background = props.background || "#F5F5F5"
  
  const [values, setValues] = useState<string[]>(Array(length).fill(''))

  const handleChange = (text:string, index:number) => {

    if (!isAlphaNumeric && /^\d*$/.test(text)) {
      const newValues = [...values]
      newValues[index] = text
      setValues(newValues)
      if (!text) {
        setFocusedIndex(index - 1)
      } else {
        setFocusedIndex(index + 1)
      }
    }
    if (isAlphaNumeric) {
      const newValues = [...values]
      newValues[index] = text
      setValues(newValues)
      if (!text) {
        setFocusedIndex(index - 1)
      } else {
        setFocusedIndex(index + 1)
      }
    }
  }
  
  useEffect(() => {
    // Focus the input at focusedIndex whenever it changes
    if (inputRefs.current[focusedIndex]) {
      inputRefs.current[focusedIndex].focus()
    }
  }, [focusedIndex])

  useEffect(() => {
    const allDone = values.every((value) => value.length > 0 )
    if (sendImmediately && allDone) {
      console.log(values.join(''))
    }
   
  

  }, [values])

  const renderCharacterComponent = (index:number) => {
    return (
      <input key={`k-code-input-${index}`} className="k-code-input-character-container hover:border-['1px solid red']" type="text"
      style={{
        background,
        borderRadius,
        width: inputWidth,
        height: inputHeight
      }}
      value={values[index]}
      maxLength={1}
      onChange={(event) => {
        handleChange(event.target.value, index)
      }}
      ref={(el:HTMLInputElement) => (inputRefs.current[index] = el)}
      />
    )
  }

  return (
    <div className="flex flex-row justify-between items-center" style={{gap, width: "100%"}}>
      {Array.from({length}, (_, index) => (
        renderCharacterComponent(index)
      ))}
    </div>
  )
}

export default KInput
