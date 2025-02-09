import React from "react";
import { Platform, View, Text } from "react-native";
import { Controller, useForm } from "react-hook-form";
import styled from "@emotion/native";
import { useTheme } from "@emotion/react";
import { AntDesign } from "@expo/vector-icons";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { Theme } from "@/components/theme/Theme";
import Divider from "@/components/ui/Divider";

const ImageContainer = styled(View)(() => ({
  position: "relative",
  width: "100%",
  marginBottom: 20,
  alignItems: "flex-start",
}));

const ButtonContainer = styled(View)(() => ({
  width: "100%",
  justifyContent: "center",
}));

interface LoginPayload {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = React.useCallback((formData: LoginPayload) => {
    console.log(formData);
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <ImageContainer>
        <Logo />
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
            keyboardType="email-address"
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
      <Button onPress={handleSubmit(onSubmit)} title={"Login"} size="medium" />
      <View style={{ flex: 1 }} />
      <Divider title="or connect with" />
      <ButtonContainer>
        <Button
          icon={
            <AntDesign color={(theme as Theme).colors.text} name="google" />
          }
          title="Google"
          type="clear"
        />
        {Platform.OS === "ios" && (
          <Button
            icon={
              <AntDesign name="apple1" color={(theme as Theme).colors.text} />
            }
            title="Apple"
            type="clear"
          />
        )}
      </ButtonContainer>
    </View>
  );
};

export default LoginForm;
