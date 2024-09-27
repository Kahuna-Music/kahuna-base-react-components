import React from "react";
import "./KSelectRangeCustom.css";
import "../../main.css";
export interface KSelectRangeProps {
    value: DateRangeType;
    onChange: (date: DateRangeType) => void;
    width?: string;
    height?: string;
    border?: string;
    backgroundColor?: string;
    boxShadow?: string;
    icon?: string;
    padding?: string;
    hoverBackgroundColor?: string;
    borderRadius?: number;
    anchorToButton?: boolean;
    position?: "top" | "bottom" | "left" | "right";
    align?: "top" | "bottom" | "left" | "right" | "center";
    minimumDate?: Date;
    maximumDate?: Date;
    popupCalendarBackground?: string;
}
export type DateRangeType = Date | null | [Date | null, Date | null];
declare const KSelectRange: React.FC<KSelectRangeProps>;
export default KSelectRange;
