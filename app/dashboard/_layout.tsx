import React from "react";
import { Tabs } from "expo-router";
import FeatherIcon from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useTheme } from "@emotion/react";
import { Theme } from "@/components/theme/Theme";
import { SafeAreaView, Text } from "react-native";
import Header from "@/components/shared/Header";

export default function _layout() {
  const theme = useTheme() as Theme;

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <FeatherIcon
              style={{
                fontSize: 24,
                color: focused ? theme.colors.primary : theme.colors.text,
              }}
              focused={focused}
              name="home"
            />
          ),
          title: "Home",
          header: () => <Header />,
        }}
      />
      <Tabs.Screen
        name="Explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <FeatherIcon
              style={{
                fontSize: 24,
                color: focused ? theme.colors.primary : theme.colors.text,
              }}
              focused={focused}
              name="search"
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Portfolio"
        options={{
          title: "Portfolio",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              style={{
                fontSize: 24,
                color: focused ? theme.colors.primary : theme.colors.text,
              }}
              focused={focused}
              name="wallet"
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Payments"
        options={{
          title: "Payments",
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              style={{
                fontSize: 24,
                color: focused ? theme.colors.primary : theme.colors.text,
              }}
              focused={focused}
              name="arrow-right-arrow-left"
            />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
