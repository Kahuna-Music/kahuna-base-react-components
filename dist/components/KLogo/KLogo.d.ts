import React from "react";
import "../../main.css";
export interface KLogoProps {
    width?: number;
    height?: number;
    borderRadius?: number;
    primaryText?: string;
    secondaryText?: string;
}
declare const KLogo: React.FC<KLogoProps>;
export default KLogo;
