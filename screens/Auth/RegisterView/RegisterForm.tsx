import React from "react";
import { View } from "react-native";
import styled from "@emotion/native";
import GeneralInformationStep from "./components/GeneralInformationStep";
import Timeline from "@/components/Timeline";
import { Theme } from "@/components/theme/Theme";
import ProfileInformationStep from "./components/ProfileInformationStep";
import { IRegistrationPayload } from "@/models/IRegistrationPayload";
import AddressInformationStep from "./components/AddressInformationStep";
import ProfileImageUploaderStep from "./components/ProfileImageUploaderStep";

const Container = styled(View)<{ theme?: Theme }>(({ theme }) => ({
  flex: 1,
  padding: 20,
  backgroundColor: theme.colors.background,
}));

interface RegistrationState {
  user: IRegistrationPayload;
  currentStep: number;
}

const initialState: RegistrationState = {
  user: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    profileImage: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    role: "",
  },
  currentStep: 1,
};

type Action =
  | {
      type: "UPDATE_STEP_DATA";
      payload: Partial<IRegistrationPayload>;
    }
  | {
      type: "UPDATE_STEP";
      payload: number;
    };

const reducer = (
  state: RegistrationState,
  action: Action
): RegistrationState => {
  switch (action.type) {
    case "UPDATE_STEP_DATA":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case "UPDATE_STEP":
      return { ...state, currentStep: action.payload };
    default:
      return state;
  }
};

const RegisterForm: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const totalSteps = 4;

  const handleDataSubmit = (data: Partial<IRegistrationPayload>) => {
    dispatch({ type: "UPDATE_STEP_DATA", payload: data });
    dispatch({ type: "UPDATE_STEP", payload: state.currentStep + 1 });
  };

  const handleBack = () => {
    dispatch({ type: "UPDATE_STEP", payload: state.currentStep - 1 });
  };

  return (
    <Container>
      <Timeline currentStep={state.currentStep} totalSteps={totalSteps} />
      {state.currentStep === 1 && (
        <GeneralInformationStep
          initialData={state.user}
          onDataSubmit={handleDataSubmit}
          onBack={handleBack}
        />
      )}
      {state.currentStep === 2 && (
        <ProfileInformationStep
          initialData={state.user}
          onDataSubmit={handleDataSubmit}
          onBack={handleBack}
        />
      )}
      {state.currentStep === 3 && (
        <AddressInformationStep
          initialData={state.user}
          onDataSubmit={handleDataSubmit}
          onBack={handleBack}
        />
      )}
      {state.currentStep === 4 && (
        <ProfileImageUploaderStep
          initialData={state.user}
          onDataSubmit={handleDataSubmit}
          onBack={handleBack}
        />
      )}
    </Container>
  );
};

export default RegisterForm;
