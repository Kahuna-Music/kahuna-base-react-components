import React from 'react';

interface KButtonProps {
    testIdPrefix: string;
    label?: string;
    theme: "primary" | "secondary";
    disabled?: boolean;
}

declare const KButton: React.FC<KButtonProps>;

export { KButton };
