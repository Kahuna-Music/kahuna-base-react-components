import React from 'react';

interface KButtonProps {
    testIdPrefix: string;
    label?: string;
    theme: "primary" | "secondary";
    disabled?: boolean;
}
declare const KButton: React.FC<KButtonProps>;

interface KSpanProps {
    testIdPrefix: string;
    text?: string;
    theme: "primary" | "secondary";
}
declare const KSpan: React.FC<KSpanProps>;

export { KButton, KSpan };
