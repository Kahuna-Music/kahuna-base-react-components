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
    disabled?: boolean;
    textColor?: string;
    padding?: string;
    shadowDisabled?: boolean;
    hoverBackground?: string;
    fontWeight?: number;
    textDecoration?: string;
    gap?: string;
    activeBackground?: string;
    border?: string;
    hoverBorder?: string;
    activeBorder?: string;
}
declare const KButton: React.FC<KButtonProps>;
export default KButton;
