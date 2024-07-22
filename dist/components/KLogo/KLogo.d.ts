import React from "react";
import "../../main.css";
export interface KLogoProps {
    width?: number;
    height?: number;
    borderRadius?: number;
    primaryText?: string;
    secondaryText?: string;
    logoColor?: string;
    hoverEnabled?: boolean;
    primaryTextColor?: string;
    secondaryTextColor?: string;
    primaryTextFontSize?: number;
    secondaryTextFontSize?: number;
    hideIcon?: boolean;
}
declare const KLogo: React.FC<KLogoProps>;
export default KLogo;
