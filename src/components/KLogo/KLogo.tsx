import React from "react";
import "../../main.css"
// @ts-ignore
import Logo from "../../assets/logo.svg"

export interface KLogoProps {
  width?: number
  height?: number
  borderRadius?: number
}

const KLogo: React.FC<KLogoProps> = (props) => {
  const width = props.width || 88
  const height = props.height || 88
  const borderRadius = props.borderRadius || 10
  return (
    <img src={Logo} alt={"kahuna-logo"} style={{borderRadius, width, height}}/>
  );
};

export default KLogo;