import styled from "@emotion/native";
import React from "react";
import { View, Text } from "react-native";
import { alpha } from "@/utils/alpha";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Theme } from "./theme/Theme";

interface TimelineProps {
  currentStep: number;
  totalSteps: number;
}

const Timeline: React.FC<TimelineProps> = ({ currentStep, totalSteps }) => {
  return (
    <Container>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <Step isActive={index < currentStep}>
            {index < currentStep - 1? (
              <MaterialIcons name="check" size={20} color="#fff" />
            ) : (
              <StepText>{index + 1}</StepText>
            )}
          </Step>
          {index < totalSteps - 1 && (
            <Line isActive={index < currentStep - 1} />
          )}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Timeline;

const Container = styled(View)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 20,
}));

const Step = styled(View, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean; theme?: Theme }>(({ theme, isActive }) => ({
  width: 30,
  height: 30,
  borderRadius: 15,
  backgroundColor: isActive ? theme.colors.primary : "#ccc",
  justifyContent: "center",
  alignItems: "center",
}));

const StepText = styled(Text)<{ theme?: Theme}>(({ theme }) => ({
  color: theme.colors.buttonText,
}));

const Line = styled(View, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean; theme?: Theme }>(({ theme, isActive }) => ({
  flex: 1,
  height: 2,
  backgroundColor: isActive ? theme.colors.primary : alpha(theme.colors.primary, 0.3),
  marginHorizontal: 5,
}));