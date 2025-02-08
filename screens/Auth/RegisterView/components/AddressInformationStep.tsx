import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import styled from "@emotion/native";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";
import {
  AddressInformationStepPayload,
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
  position: "absolute",
  bottom: 20,
  left: 0,
  right: 0,
  flexDirection: "row",
  justifyContent: "center",
  paddingHorizontal: 20,
}));

const AddressInformationStep: React.FC<FormStep> = ({
  initialData,
  onBack,
  onDataSubmit,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressInformationStepPayload>({
    defaultValues: {
      address: initialData?.address || "",
      city: initialData?.city || "",
      state: initialData?.state || "",
      zip: initialData?.zip || "",
      country: initialData?.country || "",
    },
  });

  const onSubmit = React.useCallback(
    (formData: AddressInformationStepPayload) => {
      onDataSubmit(formData);
    },
    [onDataSubmit]
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageContainer>
          <Logo />
        </ImageContainer>
        <Controller
          control={control}
          name="address"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputField
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCorrect={false}
              autoCapitalize="none"
              label="Address"
              error={errors.address?.message}
            />
          )}
          rules={{
            required: "Address is required",
          }}
        />
        <Controller
          control={control}
          name="city"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputField
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCorrect={false}
              autoCapitalize="none"
              label="City"
              error={errors.city?.message}
            />
          )}
          rules={{
            required: "City is required",
          }}
        />
        <Controller
          control={control}
          name="state"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputField
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCorrect={false}
              autoCapitalize="none"
              label="State"
              error={errors.state?.message}
            />
          )}
          rules={{
            required: "State is required",
          }}
        />
        <Controller
          control={control}
          name="zip"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputField
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCorrect={false}
              autoCapitalize="none"
              label="Zip Code"
              keyboardType="numeric"
              error={errors.zip?.message}
            />
          )}
          rules={{
            required: "Zip Code is required",
          }}
        />
        <Controller
          control={control}
          name="country"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputField
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCorrect={false}
              autoCapitalize="none"
              label="Country"
              error={errors.country?.message}
            />
          )}
          rules={{
            required: "Country is required",
          }}
        />
        <View style={{ flex: 1 }} />
        <ButtonContainer>
          <Button
            type="outline"
            title={"Cancel"}
            style={{
              width: 100,
              marginRight: 10,
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressInformationStep;
