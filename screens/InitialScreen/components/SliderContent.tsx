import { Theme } from "@/components/theme/Theme";
import styled from "@emotion/native";
import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { SvgProps } from "react-native-svg";

const { width } = Dimensions.get("window");

interface SliderContentProps {
  title: string;
  content: string;
  image: React.FC<SvgProps>;
}

const SliderContent: React.FC<SliderContentProps> = ({ title, content, image: Image }) => {
  return (
    <Slider>
      <SliderTitle>{title}</SliderTitle>
      <SliderContentText>{content}</SliderContentText>
      <ImageContainer>
        <Image width="100%" height="100%" preserveAspectRatio="xMidYMid meet" />
      </ImageContainer>
    </Slider>
  );
};

export default SliderContent;

const Slider = styled(View)<{ theme?: Theme }>(({ theme }) => ({
  width,
  height: 500,
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
  borderRadius: 10,
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 5,
}));

const SliderTitle = styled(Text)<{ theme?: Theme}>(({ theme }) => ({
  fontSize: 24,
  fontWeight: "bold",
  marginTop: 80,
  marginBottom: 10,
  textAlign: "center",
  color: theme.colors.text,
}));

const SliderContentText = styled(Text)<{ theme?: Theme}>(({ theme }) => ({
  fontSize: 16,
  marginBottom: 20,
  textAlign: "center",
  color: theme.colors.secondaryText,
}));

const ImageContainer = styled(View)({
  width: "100%",
  marginBottom: 20,
});