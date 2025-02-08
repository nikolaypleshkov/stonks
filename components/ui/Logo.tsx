import React from "react";
import { Text, View } from "react-native";
import styled from "@emotion/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Theme } from "../theme/Theme";

const LogoContainer = styled(View)(() => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 20,
  marginBottom: 30,
  width: "100%",
}));

const LogoText = styled(Text)<{ theme?: Theme }>(({ theme }) => ({
  textAlign: "center",
  fontSize: 24,
  fontWeight: "bold",
  color: theme.colors.text,
}));

const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <LogoText>Stonks</LogoText>
      <MaterialIcons name="stacked-line-chart" size={24} color="#6200EE" />
    </LogoContainer>
  );
};

export default Logo;