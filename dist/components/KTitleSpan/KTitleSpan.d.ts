import React from "react";
import "../../main.css";
export interface KTitleSpanProps {
    text: string;
    fontSize?: number;
    color?: string;
    fontWeight?: number;
    lineHeight?: string;
    fontStyle?: string;
    letterSpacing?: string;
    bold?: boolean;
    ellipsis?: boolean;
}
declare const KTitleSpan: React.FC<KTitleSpanProps>;
export default KTitleSpan;
