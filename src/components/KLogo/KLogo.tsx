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
  logoType: string
}

const KLogo: React.FC<KLogoProps> = (props) => {
  const [onHover, setOnHover] = useState(false)
  const logoType = props.logoType || "black"

  const renderText = () => {
    return (
      <div
        className="flex flex-row items-center gap-2.5"
        style={{
          borderRadius: !props.borderRadius ? "" : props.borderRadius
        }}
      >
        <img src={KahunaIcon} alt="kahuna-icon" />
        <img src={VectorIcon} alt="vector" />
        <span>
          <KSpan text="for artists" color="#000" lineHeight="16px" />
        </span>
      </div>
    )
  }

  const renderLogo = () => {
    return (
      <div
        style={{
          width: !props.width ? "72px" : props.width,
          height: !props.height ? "72px" : props.height,
          borderRadius: !props.borderRadius ? "" : props.borderRadius
        }}
      >
        <img
          src={logoType === "black" ? Logo : logoType === "gray" ? LogoGray : LogoWhite}
          alt="Logo"
          style={{
            width: !props.width ? "72px" : props.width,
            height: !props.height ? "72px" : props.height,
            borderRadius: !props.borderRadius ? "" : props.borderRadius
          }}
        />
      </div>
    )
  }

  const renderHoveredLogo = () => {
    return (
      <div
        style={{
          width: !props.width ? "48px" : props.width,
          height: !props.height ? "48px" : props.height,
          borderRadius: !props.borderRadius ? "" : props.borderRadius
        }}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <img
          style={{
            width: !props.width ? "48px" : props.width,
            height: !props.height ? "48px" : props.height,
            borderRadius: !props.borderRadius ? "" : props.borderRadius
          }}
          src={!onHover ? LogoWhite : LogoWhiteHovered}
          alt="logo-icon"
        />
      </div>
    )
  }

  const renderLogoAndText = () => {
    return (
      <div className="flex flex-row gap-1.5">
        <div
          style={{
            width: !props.width ? "48px" : props.width,
            height: !props.height ? "48px" : props.height,
            borderRadius: !props.borderRadius ? "" : props.borderRadius
          }}
        >
          <img
            style={{
              width: !props.width ? "48px" : props.width,
              height: !props.height ? "48px" : props.height,
              borderRadius: !props.borderRadius ? "" : props.borderRadius
            }}
            src={logoType === "black-text" ? Logo : logoType === "gray-text" ? LogoGray : LogoWhite}
            alt="logo-icon"
          />
        </div>
        <img src={KahunaIcon} alt="kahuna-icon" />
      </div>
    )
  }

  return (
    <div className={"flex items-center"}>
      {(logoType === "black" || logoType === "gray" || logoType === "white") && renderLogo()}
      {logoType === "hover" && renderHoveredLogo()}
      {(logoType === "black-text" || logoType === "gray-text" || logoType === "white-text") && renderLogoAndText()}
      {logoType === "text" && renderText()}
    </div>
  )
}

export default KLogo
