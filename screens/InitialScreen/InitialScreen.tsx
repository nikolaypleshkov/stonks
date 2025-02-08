import React from "react";
import { SafeAreaView, View, StyleSheet, Dimensions } from "react-native";
import Button from "@/components/ui/Button";
import Carousel from "@/components/Carousel";
import SliderContent from "./components/SliderContent";
import InitialSlideSVG from "@/components/ui/InitialSlideSVG";
import Logo from "@/components/ui/Logo";
import { Link } from "expo-router";
import styled from "@emotion/native";
import { Theme } from "@/components/theme/Theme";

const { width } = Dimensions.get("window");

const InitialScreen: React.FC = () => {
  const data = [
    <SliderContent
      title="Easy Access to the Market"
      content="Track the stock market, view real-time prices, and make informed decisions, all at your fingertips"
      image={InitialSlideSVG}
    />,
    <SliderContent
      title="Easy Access to the Market"
      content="Track the stock market, view real-time prices, and make informed decisions, all at your fingertips"
      image={InitialSlideSVG}
    />,
    <SliderContent
      title="Easy Access to the Market"
      content="Track the stock market, view real-time prices, and make informed decisions, all at your fingertips"
      image={InitialSlideSVG}
    />,
  ];

  return (
    <Container>
      <Logo />
      <View style={styles.carouselContainer}>
        <Carousel data={data} />
      </View>
      <View style={styles.buttonGroup}>
        <Link href={{ pathname: "/auth/register" }} asChild>
          <Button title="Open Account" color="primary" size="medium" />
        </Link>
        <Button title="Log in" color="primary" type="clear" size="medium" />
      </View>
    </Container>
  );
};


const Container = styled(SafeAreaView)<{ theme?: Theme}>(({ theme }) => ({
  flex: 1,
  padding: 20,
  backgroundColor: theme.colors.background,
}));

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
  carouselContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonGroup: {
    marginBottom: 20,
    justifyContent: "flex-end",
  },
});

export default InitialScreen;
