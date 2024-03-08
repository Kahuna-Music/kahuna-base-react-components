import React from "react";
export interface KButtonProps {
    testIdPrefix: string;
    label?: string;
    theme: "primary" | "secondary";
    disabled?: boolean;
}
declare const KButton: React.FC<KButtonProps>;
export default KButton;
