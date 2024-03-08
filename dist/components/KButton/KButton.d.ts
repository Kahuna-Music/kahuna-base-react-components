import React from "react";
import "../../main.css";
export interface KButtonProps {
    onClick: () => void;
    text?: string;
    icon?: string;
    rightIcon?: string;
    leftIcon?: string;
    background?: string;
    borderRadius?: number;
    width?: string;
    height?: string;
}
declare const KButton: React.FC<KButtonProps>;
export default KButton;
