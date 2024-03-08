import React from "react";
export interface KSpanProps {
    testIdPrefix: string;
    text?: string;
    theme: "primary" | "secondary";
}
declare const KSpan: React.FC<KSpanProps>;
export default KSpan;
