import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled, { css } from "@emotion/native";

type ButtonComponentColor = "primary" | "secondary" | "warning" | "success" | "info" | "danger";
type ButtonSize = "xSmall" | "small" | "medium" | "large";

type ButtonComponentProps = TouchableOpacityProps & {
  color: ButtonComponentColor;
  size?: ButtonSize;
  title: string;
};

const StyledButton = styled(TouchableOpacity, {
  shouldForwardProp: (prop) => prop !== "color" && prop !== "size",
})<{ color: ButtonComponentColor, size: ButtonSize }>(({ theme, color, size }) => ({
    backgroundColor: theme.colors[color],
    padding: theme.spaces[size],
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spaces.small,
    width: "100%",
}));

const StyledText = styled(Text)(({ theme }) => ({
    color: theme.colors.text,
    fontSize: 16,
}));

const Button: React.FC<ButtonComponentProps> = (props) => {
  const { color, title, size = "small", ...rest } = props;
  return (
    <StyledButton color={color} size={size} {...rest}>
      <StyledText>{title}</StyledText>
    </StyledButton>
  );
};

export default Button;
