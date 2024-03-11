import React from "react";
import "../../main.css";
export interface KInputProps {
    value: string;
    setValue: (value: string) => void;
    width?: number;
    height?: number;
    leftIcon?: string;
    background?: string;
    activeBackground?: string;
    borderRadius?: number;
    placeholder?: string;
    shadowDisabled?: boolean;
}
declare const KInput: React.FC<KInputProps>;
export default KInput;
