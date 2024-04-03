import React from "react";
import "../../main.css";
import { MultiValue } from "react-select";
export interface KSelectOption {
    label: string;
    value: number;
    type?: string;
    label2?: string;
    value2?: string;
    icon?: string;
}
export interface KDropdownProps {
    defaultValue?: KSelectOption | MultiValue<KSelectOption>;
    selected?: KSelectOption | MultiValue<KSelectOption>;
    onSelect: (selected: KSelectOption | MultiValue<KSelectOption>) => void;
    options: KSelectOption[];
    width?: number;
    height?: number;
    leftIcon?: string;
    rightIcon?: string;
    background?: string;
    activeBackground?: string;
    borderRadius?: number;
    placeholder?: string;
    isMulti?: boolean;
    label?: string;
    textColor?: string;
    shadowDisabled?: boolean;
    menuBackground?: string;
}
declare const KDropdown: React.FC<KDropdownProps>;
export default KDropdown;
