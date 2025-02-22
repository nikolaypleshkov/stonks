import styled from "@emotion/native";
import React from "react";
import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { Theme } from "../theme/Theme";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Feather } from "@expo/vector-icons";

const Header: React.FC = () => {
  const userProfileImage = useSelector(
    (state: RootState) => state.user.user?.profileImage
  );

  console.log("userProfileImage", userProfileImage);
  return (
    <Container>
      <ButtonContainer>
        <TouchableOpacity>
          <ProfileImage source={{ uri: userProfileImage }} />
        </TouchableOpacity>
      </ButtonContainer>
      <SearchContainer>
        <SearchInputContainer>
          <Feather name="search" size={20} color="gray" />
          <SearchInput placeholder="Search" />
        </SearchInputContainer>
      </SearchContainer>
      <RightButtonsContainer>
        <IconButton>
          <FontAwesome6 name="chart-simple" size={18} color="black" />
        </IconButton>
        <IconButton>
          <FontAwesome6 name="credit-card" size={18} color="black" />
        </IconButton>
      </RightButtonsContainer>
    </Container>
  );
};

export default Header;

const Container = styled(SafeAreaView)<{ theme?: Theme }>(({ theme }) => ({
  backgroundColor: "transparent",
  padding: 20,
  height: 100,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginHorizontal: 10,
}));

const ButtonContainer = styled(View)<{ theme?: Theme }>(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
}));

const SearchContainer = styled(View)<{ theme?: Theme }>(({ theme }) => ({
  flex: 1,
  marginHorizontal: 10,
}));

const SearchInputContainer = styled(View)<{ theme?: Theme }>(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: theme.colors.background,
  borderRadius: 20,
  paddingHorizontal: 10,
  height: 35,
  borderWidth: 1,
  borderColor: theme.colors.border,
}));

const SearchInput = styled(TextInput)<{ theme?: Theme }>(({ theme }) => ({
  flex: 1,
  marginLeft: 10,
  borderRadius: 20,
  height: 35,
}));

const RightButtonsContainer = styled(View)<{ theme?: Theme }>(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: 80,
}));

const ProfileImage = styled(Image)<{ theme?: Theme }>(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: 20,
}));

const IconButton = styled(TouchableOpacity)<{ theme?: Theme }>(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.783)",
  borderRadius: 50,
  padding: 10,
}));
