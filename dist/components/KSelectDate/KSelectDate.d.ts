import React from "react";
import "./CalendarCustom.css";
import "../../main.css";
export interface KSelectDateProps {
    value: Date | undefined;
    onChange: (date: Date | undefined) => void;
    minimumDate?: Date;
}
declare const KSelectDate: React.FC<KSelectDateProps>;
export default KSelectDate;
