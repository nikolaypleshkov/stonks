import { Theme as EmotionTheme } from "@emotion/react";

export interface Theme extends EmotionTheme {
  fonts: {
    primary: string;
    secondary: string;
  };
  fontSizes: {
    small: number;
    medium: number;
    large: number;
    xLarge: number;
  };
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;
    danger: string;
    warning: string;
    success: string;
    info: string;
    text: string;
    secondaryText: string;
    buttonText: string;
    buttonSecondaryText: string;
    textFieldBackground: string;
    clear: string;
    border: string;
    background: string;
  };
  spaces: {
    xSmall: number;
    small: number;
    medium: number;
    large: number;
    xLarge: number;
  };
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}
