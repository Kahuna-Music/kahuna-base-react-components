import React from "react";
import "../../main.css";
export interface KInputProps {
    value: string;
    onChange: (value: string) => void;
    onBlur?: (value: string) => void;
    width?: number;
    height?: number;
    leftIcon?: string;
    rightIcon?: string;
    background?: string;
    activeBackground?: string;
    borderRadius?: number;
    disabled?: boolean;
    placeholder?: string;
    shadowDisabled?: boolean;
    type?: string;
    leftIconClick?: () => void;
    rightIconClick?: () => void;
    accentColor?: string;
    hoverBackground?: string;
}
declare const KInput: React.FC<KInputProps>;
export default KInput;
