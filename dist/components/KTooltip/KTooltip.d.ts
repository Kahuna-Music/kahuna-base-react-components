import React from "react";
import "../../main.css";
export interface KTooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    align?: "top" | "bottom" | "left" | "right" | "center";
    backgroundColor?: string;
    width?: string;
    height?: string;
    zIndex?: number;
    border?: string;
    borderRadius?: string;
    boxShadow?: string;
    showArrow?: boolean;
    arrowColor?: string;
    padding?: string;
    marginTop?: string;
    marginLeft?: string;
}
declare const KTooltip: React.FC<KTooltipProps>;
export default KTooltip;
