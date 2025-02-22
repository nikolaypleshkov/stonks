import React from "react";
import { Stack } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const AppNavigator: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  console.log("user", user);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!user ? (
        <>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="auth/register/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="auth/login/index"
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen
          name="dashboard"
          options={{ headerShown: false, gestureEnabled: false }}
        />
      )}
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AppNavigator;
