import React, { useState } from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";
import styled from "@emotion/native";
import { Theme } from "../theme/Theme";

interface InputFieldProps extends TextInputProps {
  label?: string;
  error?: string;
}

const InputField = React.forwardRef<TextInput, InputFieldProps>(
  ({ label, error, style, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = React.useRef<TextInput>(null);

    const handleFocus = () => {
      setIsFocused(true);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    return (
      <Container>
        {label && <Label>{label}</Label>}
        <StyledTextInput
          {...props}
          ref={inputRef}
          isFocused={isFocused}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {error && <ErrorText>{error}</ErrorText>}
      </Container>
    );
  }
);

const Container = styled(View)(() => ({
  marginBottom: 20,
}));

const Label = styled(Text)<{ theme?: Theme }>(({ theme }) => ({
  marginBottom: 5,
  fontSize: 16,
  color: theme.colors.text,
}));

const StyledTextInput = styled(TextInput, {
  shouldForwardProp: (prop) => prop !== "isFocused" && prop !== "theme",
})<{ isFocused: boolean; theme?: Theme }>(({ theme, isFocused }) => ({
  height: 40,
  borderWidth: 1,
  borderRadius: 5,
  paddingHorizontal: 10,
  borderColor: isFocused ? theme.colors["primary"] : theme.colors["border"],
  backgroundColor: theme.colors.textFieldBackground,
  color: theme.colors.text,
}));

const ErrorText = styled(Text)<{ theme?: Theme }>(({ theme }) => ({
  marginTop: 5,
  fontSize: 14,
  color: theme.colors.danger,
}));

export default InputField;
