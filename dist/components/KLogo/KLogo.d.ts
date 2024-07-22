import React from "react";
import "../../main.css";
export interface KLogoProps {
    width?: number;
    height?: number;
    borderRadius?: number;
    primaryTextVisible?: boolean;
    secondaryText?: string;
    logoColor?: string;
    hoverEnabled?: boolean;
    secondaryTextColor?: string;
    secondaryTextFontSize?: number;
    hideIcon?: boolean;
    primaryTextWidth?: number;
    primaryTextHeight?: number;
}
declare const KLogo: React.FC<KLogoProps>;
export default KLogo;
