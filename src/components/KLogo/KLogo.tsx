import React, { useState } from "react"
import "../../main.css"
//@ts-ignore
import Logo from "../../assets/logo.svg"
//@ts-ignore
import KahunaIcon from "../../assets/kahuna-text.svg"
//@ts-ignore
import VectorIcon from "../../assets/vector.svg"
//@ts-ignore
import LogoWhite from "../../assets/logo-small.svg"
//@ts-ignore
import LogoWhiteHovered from "../../assets/logo-small-hovered.svg"
//@ts-ignore
import LogoGray from "../../assets/logo-gray.svg"
import KTitleSpan from "../KTitleSpan"
import KSpan from "../KSpan"

export interface KLogoProps {
  width?: number
  height?: number
  borderRadius?: number
  primaryText?: string
  secondaryText?: string
  logoColor?: string
  hoverEnabled?: boolean
  primaryTextColor?: string
  secondaryTextColor?: string
  primaryTextFontSize?: number
  secondaryTextFontSize?: number
  hideIcon?: boolean
}

const KLogo: React.FC<KLogoProps> = (props) => {
  const width = props.width || 88
  const height = props.height || 88
  const borderRadius = props.borderRadius || 10
  const logoColor = props.logoColor || "black"

  const logoIcon = logoColor === "black" ? Logo : logoColor === "white" ? LogoWhite : LogoGray
  const hoverEnabled = props.hoverEnabled || false
  const hideIcon = props.hideIcon || false

  const primaryTextColor = props.primaryTextColor || "#111"
  const secondaryTextColor = props.secondaryTextColor || "#000"
  const primaryTextFontSize = props.primaryTextFontSize || 20
  const secondaryTextFontSize = props.secondaryTextFontSize || 14

  const [onHover, setOnHover] = useState(false)

  return (
    <div className={"flex items-center"}>
      {!hideIcon && (
        <img
          src={onHover && hoverEnabled ? LogoWhiteHovered : logoIcon}
          alt={"kahuna-logo"}
          style={{ borderRadius, width, height }}
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        />
      )}
      {props.primaryText && (
        <div className={"ml-2 mr-2 flex items-center"}>
          <KTitleSpan
            fontSize={primaryTextFontSize}
            lineHeight={`${primaryTextFontSize}px`}
            text={props.primaryText}
            color={primaryTextColor}
            bold={true}
          />
        </div>
      )}
      {(props.primaryText && props.secondaryText) && <img src={VectorIcon} alt="vector" />}
      {props.secondaryText && (
        <div className={"pl-2 flex items-center"}>
          <KSpan fontSize={secondaryTextFontSize} text={props.secondaryText} color={secondaryTextColor} />
        </div>
      )}
    </div>
  )
}

export default KLogo
