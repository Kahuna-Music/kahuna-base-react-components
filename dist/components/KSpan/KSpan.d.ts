import React, { CSSProperties } from "react";
import "../../main.css";
export interface KSpanProps {
    text: string;
    fontSize?: number | string;
    color?: string;
    fontWeight?: number;
    lineHeight?: string;
    fontStyle?: string;
    letterSpacing?: string;
    hoverStyle?: CSSProperties;
    textDecoration?: string;
    ellipsis?: boolean;
}
declare const KSpan: React.FC<KSpanProps>;
export default KSpan;
