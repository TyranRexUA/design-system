import React, { ReactNode } from 'react';

declare enum Themes {
    MAIN = "MAIN",
    SECONDARY = "SECONDARY"
}

declare type IThemes = Themes | undefined;

interface IThemeProvider {
    themeName?: Themes;
    children?: ReactNode;
}

declare const _default$4: React.NamedExoticComponent<IThemeProvider>;

interface IButtonProps {
    label: string;
    onPress: () => void;
    themeName?: Themes;
    isDisabled?: boolean;
    customClass?: string;
}

declare const _default$3: React.NamedExoticComponent<IButtonProps>;

interface ITextButton {
    label: string;
    onPress: () => void;
    themeName?: Themes;
    isDisabled?: boolean;
    customClass?: string;
}

declare const _default$2: React.NamedExoticComponent<ITextButton>;

interface IStaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

interface IIconButton {
    icon: string | IStaticImageData;
    width?: number;
    height?: number;
    onPress: () => void;
    isDisabled?: boolean;
    buttonClass?: string;
}

declare const _default$1: React.NamedExoticComponent<IIconButton>;

interface ICloseButton {
    onPress: () => void;
    isDisabled?: boolean;
    buttonClass?: string;
}

declare const _default: React.NamedExoticComponent<ICloseButton>;

declare const cn: (...classes: Array<string | boolean | undefined>) => string;

declare const useTheme: (themeName?: Themes | undefined) => Themes;

export { _default$3 as Button, _default as CloseButton, IThemes, _default$1 as IconButton, _default$2 as TextButton, _default$4 as ThemeProvider, Themes, cn, useTheme };
