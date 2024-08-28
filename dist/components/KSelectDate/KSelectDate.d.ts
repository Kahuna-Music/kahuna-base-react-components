import React from "react";
import "./CalendarCustom.css";
import "../../main.css";
export interface KSelectDateProps {
    value: Date | undefined;
    onChange: (date: Date | undefined) => void;
    minimumDate?: Date;
    onlyMonthSelection?: boolean;
    hideBody?: boolean;
    width?: string;
    height?: string;
    border?: string;
    backgroundColor?: string;
    boxShadow?: string;
    icon?: string;
    padding?: string;
    hoverBackgroundColor?: string;
    borderRadius?: number;
}
declare const KSelectDate: React.FC<KSelectDateProps>;
export default KSelectDate;
