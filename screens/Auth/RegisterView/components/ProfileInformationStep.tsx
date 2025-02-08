import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import styled from "@emotion/native";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";
import {
  ProfileInformationStepPayload,
} from "@/models/IRegistrationPayload";
import Logo from "@/components/ui/Logo";
import { FormStep } from "./FormStep";

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

const ProfileInformationStep: React.FC<FormStep> = ({
  initialData,
  onDataSubmit,
  onBack,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileInformationStepPayload>({
    defaultValues: {
      firstName: initialData?.firstName || "",
      lastName: initialData?.lastName || "",
      phoneNumber: initialData?.phoneNumber || "",
    },
  });

  const onSubmit = React.useCallback(
    (formData: ProfileInformationStepPayload) => {
      onDataSubmit(formData);
    },
    []
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>
          <ImageContainer>
            <Logo />
          </ImageContainer>
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCorrect={false}
                autoCapitalize="none"
                label="First Name"
                error={errors.firstName?.message}
              />
            )}
            rules={{
              required: "First name is required",
            }}
          />
          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCorrect={false}
                autoCapitalize="none"
                label="Last Name"
                error={errors.lastName?.message}
              />
            )}
            rules={{
              required: "Last name is required",
            }}
          />
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCorrect={false}
                autoCapitalize="none"
                label="Phone number"
                keyboardType="phone-pad"
                error={errors.lastName?.message}
              />
            )}
            rules={{
              required: "Last name is required",
            }}
          />
          <View style={{ flex: 1 }} />
          <ButtonContainer>
            <Button
              type="outline"
              title={"Back"}
              style={{
                width: 100,
              }}
              onPress={onBack}
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProfileInformationStep;
