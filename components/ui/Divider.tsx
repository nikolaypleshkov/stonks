import styled from "@emotion/native";
import React from "react";
import { Text, View } from "react-native";
import { Theme } from "../theme/Theme";

const DividerLine = styled(View)<{ theme?: Theme }>(({ theme }) => ({
  flex: 1,
  height: 1,
  backgroundColor: theme?.colors.border,
}));

const DividerContainer = styled(View)(() => ({
  flexDirection: "row",
  alignItems: "center",
  marginVertical: 20,
}));

const DividerText = styled(Text)<{ theme?: Theme }>(({ theme }) => ({
  marginHorizontal: 10,
  color: theme?.colors.text,
}));

interface DividerProps {
  title?: string;
}

const Divider: React.FC<DividerProps> = ({ title }) => {
  return (
    <DividerContainer>
      {title ? (
        <React.Fragment>
          <DividerLine />
          <DividerText>or connect with</DividerText>
          <DividerLine />
        </React.Fragment>
      ) : (
        <DividerLine />
      )}
    </DividerContainer>
  );
};

export default Divider;
