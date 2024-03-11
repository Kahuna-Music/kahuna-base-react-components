import React from "react";
import "../../main.css"
// @ts-ignore
import Logo from "../../assets/logo.svg"
import KTitleSpan from "../KTitleSpan";
import KSpan from "../KSpan";

export interface KLogoProps {
  width?: number
  height?: number
  borderRadius?: number
  primaryText?: string
  secondaryText?: string
}

const KLogo: React.FC<KLogoProps> = (props) => {
  const width = props.width || 88
  const height = props.height || 88
  const borderRadius = props.borderRadius || 10
  return (
    <div className={"flex items-center"}>
      <img src={Logo} alt={"kahuna-logo"} style={{borderRadius, width, height}}/>
      {props.primaryText && <div className={"ml-2 mr-2"}><KTitleSpan fontSize={20} text={props.primaryText}/></div>}
      {props.secondaryText && <div className={"pl-2"} style={{borderLeft: "1px solid #E7E7E7"}}>
        <KSpan fontSize={14} text={props.secondaryText}/>
      </div>}
    </div>
  );
};

export default KLogo;