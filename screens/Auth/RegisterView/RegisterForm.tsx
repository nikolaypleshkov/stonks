import React from "react";
import { View } from "react-native";
import styled from "@emotion/native";
import GeneralInformationStep from "./components/GeneralInformationStep";
import Timeline from "@/components/Timeline";
import { Theme } from "@/components/theme/Theme";

const RegisterForm: React.FC = () => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const totalSteps = 3;

  return (
    <Container>
      <Timeline currentStep={currentStep} totalSteps={totalSteps} />
      {currentStep === 1 && (
        <GeneralInformationStep onDataSubmit={() => setCurrentStep(2)} />
      )}
    </Container>
  );
};

export default RegisterForm;

const Container = styled(View)<{ theme?: Theme }>(({ theme }) => ({
  flex: 1,
  padding: 20,
  backgroundColor: theme.colors.background,
}));
