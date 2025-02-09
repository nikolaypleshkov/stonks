import { Theme } from "@/components/theme/Theme";
import styled from "@emotion/native";
import React from "react";
import { Text, SafeAreaView } from "react-native";
import LoginForm from "./LoginForm";

const Container = styled(SafeAreaView)<{ theme?: Theme }>(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.background,
}));

const LoginView: React.FC = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default LoginView;
