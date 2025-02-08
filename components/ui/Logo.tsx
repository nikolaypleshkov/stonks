import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Logo: React.FC = () => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logo}>Stonks</Text>
      <MaterialIcons name="stacked-line-chart" size={24} color="#6200EE" />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 30,
    width: "100%",
  },
  logo: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});
