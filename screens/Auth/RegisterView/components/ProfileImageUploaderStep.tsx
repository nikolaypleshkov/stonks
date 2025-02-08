import React from "react";
import { FormStep } from "./FormStep";
import styled from "@emotion/native";
import { View, Text, Image } from "react-native";
import Button from "@/components/ui/Button";
import * as ImagePicker from "expo-image-picker";

const ProfileImageUploaderStep: React.FC<FormStep> = ({
  initialData,
  onDataSubmit,
  onBack,
}) => {
  const [profileImage, setProfileImage] = React.useState<string | null>(
    initialData?.profileImage || null
  );

  const handleSelectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleTakePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <Container>
      <ImageContainer>
        {profileImage ? (
          <ProfileImage source={{ uri: profileImage }} />
        ) : (
          <PlaceholderText onPress={handleSelectImage}>No Image Selected</PlaceholderText>
        )}
      </ImageContainer>
      <ButtonContainer>
        {profileImage && <Button title="Remove Image" onPress={() => setProfileImage(null)} />}
        <Button title="Take Photo" onPress={handleTakePhoto} />
      </ButtonContainer>
    </Container>
  );
};

export default ProfileImageUploaderStep;

const Container = styled(View)(() => ({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
}));

const ImageContainer = styled(View)(() => ({
  width: 150,
  height: 150,
  borderRadius: 75,
  overflow: "hidden",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 20,
  backgroundColor: "#f0f0f0",
}));

const ProfileImage = styled(Image)(() => ({
  width: "100%",
  height: "100%",
}));

const PlaceholderText = styled(Text)(() => ({
  color: "#888",
}));

const ButtonContainer = styled(View)(() => ({
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
}));
