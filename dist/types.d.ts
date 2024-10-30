import React, { KeyboardEvent } from 'react';
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
    gap?: string;
    activeBackground?: string;
    border?: string;
    hoverBorder?: string;
    activeBorder?: string;
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
    textDecoration?: string;
    ellipsis?: boolean;
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
    bold?: boolean;
    ellipsis?: boolean;
}
declare const KTitleSpan: React.FC<KTitleSpanProps>;

interface KLogoProps {
    width?: number;
    height?: number;
    borderRadius?: number;
    primaryTextVisible?: boolean;
    secondaryText?: string;
    logoColor?: string;
    hoverEnabled?: boolean;
    secondaryTextColor?: string;
    secondaryTextFontSize?: number;
    hideIcon?: boolean;
    primaryTextWidth?: number;
    primaryTextHeight?: number;
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
    hoverBorder?: string;
    activeBorder?: string;
}
declare const KInput$1: React.FC<KInputProps>;

interface KTextAreaProps {
    value: string;
    onChange: (value: string) => void;
    rows?: number;
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
    maxHeight?: number;
    clearTextOnPressedEnter?: boolean;
}
declare const KTextArea: React.FC<KTextAreaProps>;

interface KSelectOption {
    label: string;
    value: number;
    type?: string;
    label2?: string;
    value2?: string;
    icon?: string;
    iconLabel?: string;
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
    onBlur?: (value: KSelectOption | MultiValue<KSelectOption> | undefined) => void;
    hideChosenOptionIcon?: boolean;
    isClearable?: boolean;
    isEllipsis?: boolean;
    showOnlyIconsInMulti?: boolean;
    menuWidth?: string | number;
    menuLeftMargin?: number;
    placeholderColor?: string;
    enableIndicator?: boolean;
    allowContainerShrink?: boolean;
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
    minimumDate?: Date;
    onlyMonthSelection?: boolean;
    hideBody?: boolean;
    width?: string;
    height?: string;
    border?: string;
    backgroundColor?: string;
    boxShadow?: string;
    icon?: string;
    padding?: string;
    hoverBackgroundColor?: string;
    borderRadius?: number;
    anchorToButton?: boolean;
    position?: "top" | "bottom" | "left" | "right";
    align?: "top" | "bottom" | "left" | "right" | "center";
}
declare const KSelectDate: React.FC<KSelectDateProps>;

interface KTooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
    position?: string;
    backgroundColor?: string;
    width?: string;
    height?: string;
    zIndex?: number;
    border?: string;
    borderRadius?: string;
    boxShadow?: string;
    showArrow?: boolean;
    arrowColor?: string;
    padding?: string;
}
declare const KTooltip: React.FC<KTooltipProps>;

interface SliderLabelOption {
    label: string;
    value: number;
}
interface SliderLabelProps {
    options: SliderLabelOption[];
    onChange: (option: SliderLabelOption) => void;
    value?: number;
    disabled?: boolean;
    width?: string;
    titleText?: string;
    valueText?: string;
    fontSize?: number;
    color?: string;
}
declare const KSliderLabel: React.FC<SliderLabelProps>;

interface KCodeInputProps {
    onChange: (value: string) => void;
    length?: number;
    borderRadius?: number;
    disabled?: boolean;
    padding?: string;
    gap?: number;
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    lineHeight?: string;
    allowedCharacters?: "numeric" | "alphaNumeric" | "alpha";
    width?: number;
    height?: number;
    autoFocus?: boolean;
    isPassword?: boolean;
    background?: string;
    hoverBackground?: string;
    focusedBackground?: string;
    filledBackground?: string;
    border?: string;
    hoverBorder?: string;
    focusedBorder?: string;
    filledBorder?: string;
    boxShadow?: string;
    hoverBoxShadow?: string;
    focusedBoxShadow?: string;
    filledBoxShadow?: string;
    fitInContainer?: boolean;
    isCodeCorrect?: boolean;
    autoBlur?: boolean;
}
declare const KInput: React.FC<KCodeInputProps>;

interface KSelectRangeProps {
    value: DateRangeType;
    onChange: (date: DateRangeType) => void;
    width?: string;
    height?: string;
    border?: string;
    backgroundColor?: string;
    boxShadow?: string;
    icon?: string;
    padding?: string;
    hoverBackgroundColor?: string;
    borderRadius?: number;
    anchorToButton?: boolean;
    position?: "top" | "bottom" | "left" | "right";
    align?: "top" | "bottom" | "left" | "right" | "center";
    minimumDate?: Date;
    maximumDate?: Date;
    popupCalendarBackground?: string;
}
type DateRangeType = Date | null | [Date | null, Date | null];
declare const KSelectRange: React.FC<KSelectRangeProps>;

export { KButton, KInput as KCodeInput, KDropdown, KInput$1 as KInput, KLogo, KSelectDate, KSelectRange, KSlider, KSliderLabel, KSpan, KTextArea, KTitleSpan, KTooltip };
