import React from "react";
import { SafeAreaView, Text } from "react-native";
import RegisterForm from "./RegisterForm";
import styled from "@emotion/native";
import { Theme } from "@/components/theme/Theme";

const Container = styled(SafeAreaView)<{ theme?: Theme }>(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.background,
}));

const RegisterView: React.FC = () => {
  return (
    <Container>
      <RegisterForm />
    </Container>
  );
};

export default RegisterView;