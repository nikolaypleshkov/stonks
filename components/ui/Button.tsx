import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled, { css } from "@emotion/native";
import { LinkProps } from "expo-router";
import { Theme } from "../theme/Theme";

type ButtonComponentColor =
  | "primary"
  | "secondary"
  | "warning"
  | "success"
  | "info"
  | "danger";

type ButtonType = "solid" | "outline" | "clear";

type ButtonSize = "xSmall" | "small" | "medium" | "large";

type ButtonComponentProps = TouchableOpacityProps & {
  color?: ButtonComponentColor;
  size?: ButtonSize;
  title: string;
  type?: ButtonType;
  icon?: React.ReactNode;
};

const StyledButton = styled(TouchableOpacity, {
  shouldForwardProp: (prop) =>
    prop !== "color" && prop !== "size" && prop !== "type",
})<{
  color: ButtonComponentColor;
  size: ButtonSize;
  type: ButtonType;
  theme?: Theme;
}>(({ theme, color, size, type }) => ({
  backgroundColor:
    type === "clear" || type === "outline"
      ? "transparent"
      : theme.colors[color],
  padding: theme.spaces[size],
  borderRadius: 5,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  margin: theme.spaces.small,
  borderWidth: type === "outline" ? 0.5 : 0,
}));

const StyledText = styled(Text, {
  shouldForwardProp: (prop) => prop !== "type",
})<{ type: ButtonType; theme?: Theme }>(({ theme, type }) => ({
  color:
    type === "clear" || type === "outline"
      ? theme.colors.buttonSecondaryText
      : theme.colors.buttonText,
  fontSize: 16,
}));

const StyledIcon = styled.View<{ theme?: Theme }>(({ theme }) => ({
  marginRight: theme.spaces.small,
  color: theme.colors.buttonText,
  '& > *': {
    color: theme.colors.buttonText,
  }
}));

const Button = React.forwardRef<LinkProps, ButtonComponentProps>(
  (
    { title, color = "primary", size = "small", type = "solid", icon, ...rest },
    ref
  ) => {
    return (
      <StyledButton
        color={color}
        size={size}
        type={type}
        {...rest}
        className="stonk-button"
      >
        <StyledIcon>{icon}</StyledIcon>
        <StyledText type={type}>{title}</StyledText>
      </StyledButton>
    );
  }
);

export default Button;
