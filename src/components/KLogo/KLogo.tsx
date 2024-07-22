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
  hoverEnabled?: boolean,
  primaryTextColor?: string,
  secondaryTextColor?: string,
  primaryTextFontSize?: number,
  secondaryTextFontSize?: number,
  hideIcon?: boolean
}

const KLogo: React.FC<KLogoProps> = (props) => {
  const width = props.width || 88
  const height = props.height || 88
  const borderRadius = props.borderRadius || 10
  const logoColor = props.logoColor || "black"

  const logoIcon = logoColor === "black" ? Logo : logoColor === "white" ? LogoWhite : LogoGray
  const hoverEnabled = props.hoverEnabled || false
  const iconClassName = hoverEnabled ? "k-logo-icon" : ""
  const hideIcon = props.hideIcon || false

  const primaryTextColor = props.primaryTextColor || "#111"
  const secondaryTextColor = props.secondaryTextColor || "#000"
  const primaryTextFontSize = props.primaryTextFontSize || 20
  const secondaryTextFontSize = props.secondaryTextFontSize || 14

  return (
    <div className={"flex items-center"}>
      {!hideIcon && <img className={iconClassName} src={logoIcon} alt={"kahuna-logo"} style={{ borderRadius, width, height }} />}
      {props.primaryText && (
        <div className={"ml-2 mr-2 flex items-center"}>
          <KTitleSpan fontSize={primaryTextFontSize} lineHeight="20px" text={props.primaryText} color={primaryTextColor} />
        </div>
      )}
      {props.secondaryText && (
        <div className={"pl-2"} style={{ borderLeft: "1px solid #E7E7E7" }}>
          <KSpan fontSize={secondaryTextFontSize} text={props.secondaryText} color={secondaryTextColor} />
        </div>
      )}
    </div>
  )
}

export default KLogo
