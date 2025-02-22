import React, { ComponentProps, Ref, forwardRef } from "react";
import { TabTriggerSlotProps } from "expo-router/ui";
import { Text, Pressable, View } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import styled from "@emotion/native";
import { Theme } from "../theme/Theme";

type Icon = ComponentProps<typeof Icon>["name"];

export type TabButtonProps = TabTriggerSlotProps & {
  icon?: Icon;
};

const StyledPressable = styled(Pressable)<{
  isFocused?: boolean;
  theme?: Theme;
}>(({ isFocused, theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  gap: 5,
  padding: 10,
  backgroundColor: isFocused ? theme.colors.primary : "transparent",
}));

const StyledText = styled(Text)<{ isFocused?: boolean; theme?: Theme }>(
  ({ isFocused, theme }) => ({
    color: isFocused ? theme.colors.primary : theme.colors.text,
    fontSize: 16,
  })
);

const TabButton = React.forwardRef<View, TabButtonProps>((props, ref) => {
  const { children, icon, isFocused } = props;
  return (
    <StyledPressable ref={ref} isFocused={isFocused} {...props}>
      <Icon name={icon} />
      <StyledText>{children}</StyledText>
    </StyledPressable>
  );
});

export default TabButton;
