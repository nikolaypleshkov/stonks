import React from "react";
import { View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import styled from "@emotion/native";
import SignUpSVG from "@/components/ui/SignUp";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";
import { GeneralInformationStepPayload } from "@/models/IRegistrationPayload";

interface GeneralInformationStepProps {
  onDataSubmit: (data: GeneralInformationStepPayload) => void;
}

const ImageContainer = styled(View)(() => ({
  position: "relative",
  width: "100%",
  marginBottom: 20,
  alignItems: "flex-start",
}));

const ButtonContainer = styled(View)(() => ({
  flexDirection: "row",
  width: "100%",
  justifyContent: "center",
}));

const GeneralInformationStep: React.FC<GeneralInformationStepProps> = ({ onDataSubmit }) => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<GeneralInformationStepPayload>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = React.useCallback((formData: GeneralInformationStepPayload) => {
    onDataSubmit(formData);
  }, []);

  return (
    <View>
      <ImageContainer>
        <SignUpSVG />
      </ImageContainer>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <InputField
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCorrect={false}
            autoCapitalize="none"
            label="Email"
            error={errors.email?.message}
          />
        )}
        rules={{
          required: "Email is required",
          minLength: {
            value: 3,
            message: "Email must be at least 3 characters long",
          },
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
        }}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <InputField
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCorrect={false}
            autoCapitalize="none"
            label="Password"
            secureTextEntry
            error={errors.password?.message}
          />
        )}
        rules={{
          required: "Password is required",
          minLength: {
            value: 3,
            message: "Password must be at least 3 characters long",
          },
        }}
      />
      <ButtonContainer>
        <Button
          type="outline"
          title={"Cancel"}
          style={{
            width: 100,
          }}
        />
        <Button
          onPress={handleSubmit(onSubmit)}
          title={"Next"}
          style={{
            width: 100,
          }}
        />
      </ButtonContainer>
    </View>
  );
};

export default GeneralInformationStep;