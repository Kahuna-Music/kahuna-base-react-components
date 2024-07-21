import React from "react";
import "../../main.css";
export interface SliderLabelOption {
    label: string;
    value: number;
}
export interface SliderLabelProps {
    options: SliderLabelOption[];
    onChange: (option: SliderLabelOption) => void;
    value?: number;
    disabled?: boolean;
    width?: string;
    titleText?: string;
    valueText?: string;
}
declare const KSliderLabel: React.FC<SliderLabelProps>;
export default KSliderLabel;
