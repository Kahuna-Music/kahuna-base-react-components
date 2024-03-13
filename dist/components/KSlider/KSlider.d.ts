import React from "react";
import "../../main.css";
export interface SliderOption {
    label: string;
    value: number;
}
export interface KSliderProps {
    options: SliderOption[];
    onChange: (option: SliderOption) => void;
    value?: number;
    disabled?: boolean;
    width?: string;
}
declare const KSlider: React.FC<KSliderProps>;
export default KSlider;
