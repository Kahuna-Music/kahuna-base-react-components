import React from "react";
import "../../main.css";
export interface KInputProps {
    value: string;
    onChange: (value: string) => void;
    width?: number;
    height?: number;
    leftIcon?: string;
    rightIcon?: string;
    background?: string;
    activeBackground?: string;
    borderRadius?: number;
    placeholder?: string;
    shadowDisabled?: boolean;
    type?: string;
    leftIconClick?: () => void;
    rightIconClick?: () => void;
}
declare const KInput: React.FC<KInputProps>;
export default KInput;
