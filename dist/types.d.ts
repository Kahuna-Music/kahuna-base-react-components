import React from 'react';
import { MultiValue } from 'react-select';

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
    disabled?: boolean;
    textColor?: string;
    padding?: string;
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

interface KTitleSpanProps {
    text: string;
    fontSize?: number;
    color?: string;
    fontWeight?: number;
    lineHeight?: string;
    fontStyle?: string;
    letterSpacing?: string;
}
declare const KTitleSpan: React.FC<KTitleSpanProps>;

interface KLogoProps {
    width?: number;
    height?: number;
    borderRadius?: number;
    primaryText?: string;
    secondaryText?: string;
}
declare const KLogo: React.FC<KLogoProps>;

interface KInputProps {
    value: string;
    onChange: (value: string) => void;
    width?: number;
    height?: number;
    leftIcon?: string;
    rightIcon?: string;
    background?: string;
    activeBackground?: string;
    borderRadius?: number;
    placeholder?: string;
    shadowDisabled?: boolean;
    type?: string;
    leftIconClick?: () => void;
    rightIconClick?: () => void;
}
declare const KInput: React.FC<KInputProps>;

interface KSelectOption {
    label: string;
    value: number;
    type?: string;
    label2?: string;
    value2?: string;
}
interface KDropdownProps {
    defaultValue?: KSelectOption | MultiValue<KSelectOption>;
    selected?: KSelectOption | MultiValue<KSelectOption>;
    onSelect: (selected: KSelectOption | MultiValue<KSelectOption>) => void;
    options: KSelectOption[];
    width?: number;
    height?: number;
    leftIcon?: string;
    rightIcon?: string;
    background?: string;
    activeBackground?: string;
    borderRadius?: number;
    placeholder?: string;
    isMulti?: boolean;
    label?: string;
    textColor?: string;
    shadowDisabled?: boolean;
}
declare const KDropdown: React.FC<KDropdownProps>;

export { KButton, KDropdown, KInput, KLogo, KSpan, KTitleSpan };
