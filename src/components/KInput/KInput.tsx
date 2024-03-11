import React, {useEffect, useState} from "react";
import "../../main.css"

export interface KInputProps {
  value: string
  setValue: (value: string) => void
  width?: number
  height?: number
  leftIcon?: string
  background?: string
  activeBackground?: string
  borderRadius?: number
  placeholder?: string
  shadowDisabled?: boolean
}

const KInput: React.FC<KInputProps> = (props) => {
  const [background, setBackground] = useState("#F5F5F5")

  useEffect(() => {
    const emptyBackground = props.background || "#F5F5F5"
    const activeBackground = props.activeBackground || "#FFF"

    const background = props.value ? activeBackground : emptyBackground
    setBackground(background)
  }, [props.value])

  const width = props.width || "100%"
  const height = props.height || 24
  const borderRadius = props.borderRadius || 10
  const boxShadow = props.shadowDisabled ? "" : "0 0 0 1px rgba(17, 17, 17, 0.04), 0 1px 1px 0 rgba(17, 17, 17, 0.04)"

  return (
    <div className={"k-input-container"} style={{background, borderRadius, boxShadow}}>
      {props.leftIcon && <img src={props.leftIcon} alt={"input-left-icon"}/>}
      <input
        className={"k-input"}
        style={{background, width, height}}
        value={props.value}
        placeholder={props.placeholder || ""}
        onChange={(event) => {
          props.setValue(event.target.value)
        }}/>
    </div>
  );
};

export default KInput;