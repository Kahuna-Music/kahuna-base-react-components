import React from "react";
import "../../main.css"
import KSpan from "../KSpan";

export interface KButtonProps {
  onClick: () => void
  text?: string
  icon?: string
  rightIcon?: string
  leftIcon?: string
  background?: string
  borderRadius?: number
  width?: string
  height?: string
  disabled?: boolean
  textColor?: string
}

const KButton: React.FC<KButtonProps> = (props) => {
  const disabled = props.disabled || false
  const background = disabled ? "#F0F0F0" : props.background || "#F2FE67"
  const borderRadius = props.borderRadius || 10
  const width = props.width || "100%"
  const height = props.height || "44px"
  const textColor = disabled ? "#D6D6D6" : props.textColor || "#111"

  return (
    <button className={"k-button"} disabled={disabled} onClick={props.onClick}
            style={{background, borderRadius, width, height}}>
      <div className={"flex"}>
        {props.leftIcon && <img src={props.leftIcon} alt={"button-left-icon"}/>}
        {props.text && <KSpan text={props.text} color={textColor}/>}
        {props.icon && <img src={props.icon} alt={"button-icon"}/>}
        {props.rightIcon && <img src={props.rightIcon} alt={"button-right-icon"}/>}
      </div>
    </button>
  );
};

export default KButton;