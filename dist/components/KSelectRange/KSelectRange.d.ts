import React from "react";
import "./KSelectRangeCustom.css";
import "../../main.css";
export interface KSelectRangeProps {
    value: DateRangeType;
    onChange: (date: DateRangeType) => void;
}
export type DateRangeType = Date | null | [Date | null, Date | null];
declare const KSelectRange: React.FC<KSelectRangeProps>;
export default KSelectRange;
