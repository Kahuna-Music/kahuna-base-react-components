import React, { CSSProperties } from "react";
import "../../main.css";
export interface KSpanProps {
    text: string;
    fontSize?: number;
    color?: string;
    fontWeight?: number;
    lineHeight?: string;
    fontStyle?: string;
    letterSpacing?: string;
    hoverText?: string;
    hoverTextColor?: string;
    hoverStyle?: CSSProperties;
    textDecoration?: string;
    ellipsis?: boolean;
}
declare const KSpan: React.FC<KSpanProps>;
export default KSpan;
