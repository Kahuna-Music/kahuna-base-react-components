import React from 'react';

interface KButtonProps {
    onClick: () => void;
    text?: string;
    icon?: string;
    rightIcon?: string;
    leftIcon?: string;
    background?: string;
    borderRadius?: number;
    width?: string;
    height?: string;
}
declare const KButton: React.FC<KButtonProps>;

interface KSpanProps {
    text: string;
    fontSize?: number;
    color?: string;
    fontWeight?: number;
    lineHeight?: string;
    fontStyle?: string;
    letterSpacing?: string;
}
declare const KSpan: React.FC<KSpanProps>;

interface KLogoProps {
    width?: number;
    height?: number;
    borderRadius?: number;
}
declare const KLogo: React.FC<KLogoProps>;

export { KButton, KLogo, KSpan };
