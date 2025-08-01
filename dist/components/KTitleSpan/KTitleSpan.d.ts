import React from "react";
import "../../main.css";
import { KTooltipProps } from "../KTooltip/KTooltip";
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
    tooltipProps?: Partial<KTooltipProps>;
    dataTestId?: string;
}
declare const KTitleSpan: React.FC<KTitleSpanProps>;
export default KTitleSpan;
