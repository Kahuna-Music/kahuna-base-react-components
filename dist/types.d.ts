import React, { CSSProperties, KeyboardEvent } from 'react';
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
    shadowDisabled?: boolean;
    hoverBackground?: string;
    fontWeight?: number;
    textDecoration?: string;
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
    hoverText?: string;
    hoverTextColor?: string;
    hoverStyle?: CSSProperties;
    textDecoration?: string;
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
    onBlur?: (value: string) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
    width?: number;
    height?: number;
    leftIcon?: string;
    rightIcon?: string;
    background?: string;
    activeBackground?: string;
    borderRadius?: number;
    disabled?: boolean;
    placeholder?: string;
    shadowDisabled?: boolean;
    type?: string;
    leftIconClick?: () => void;
    rightIconClick?: () => void;
    accentColor?: string;
    hoverBackground?: string;
    padding?: string;
    gap?: string;
    border?: string;
    boxShadow?: string;
    fontSize?: string;
    iconSize?: string;
    checked?: boolean;
}
declare const KInput: React.FC<KInputProps>;

interface KSelectOption {
    label: string;
    value: number;
    type?: string;
    label2?: string;
    value2?: string;
    icon?: string;
}
interface KDropdownProps {
    defaultValue?: KSelectOption | MultiValue<KSelectOption>;
    defaultValuePrimitive?: string | number;
    selected?: KSelectOption | MultiValue<KSelectOption>;
    onSelect: (selected: KSelectOption | MultiValue<KSelectOption> | undefined) => void;
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
    menuBackground?: string;
    padding?: string;
    gap?: string;
    hideChosenOptionIcon?: boolean;
    isClearable?: boolean;
}
declare const KDropdown: React.FC<KDropdownProps>;

interface SliderOption {
    label: string;
    value: number;
}
interface KSliderProps {
    options: SliderOption[];
    onChange: (option: SliderOption) => void;
    value?: number;
    disabled?: boolean;
    width?: string;
}
declare const KSlider: React.FC<KSliderProps>;

interface KSelectDateProps {
    value: Date | undefined;
    onChange: (date: Date | undefined) => void;
}
declare const KSelectDate: React.FC<KSelectDateProps>;

export { KButton, KDropdown, KInput, KLogo, KSelectDate, KSlider, KSpan, KTitleSpan };
