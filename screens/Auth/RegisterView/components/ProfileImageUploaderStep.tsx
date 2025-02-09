import React from "react";
import { View, Image, Platform } from "react-native";
import styled from "@emotion/native";
import * as ImagePicker from "expo-image-picker";
import { Theme } from "@/components/theme/Theme";
import Button from "@/components/ui/Button";
import { FormStep } from "./FormStep";
import { alpha } from "@/utils/alpha";

const Container = styled(View)(() => ({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
}));

const ImageContainer = styled(View)<{ theme?: Theme}>(({ theme }) => ({
  width: 150,
  height: 150,
  borderRadius: 75,
  borderStyle: "dotted",
  borderColor: theme.colors.primary,
  borderWidth: 1.5 ,
  overflow: "hidden",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 20,
  backgroundColor: alpha(theme.colors.primary, 0.1),
  ...(Platform.OS === "android" && { borderStyle: "dotted" }),
}));

const ProfileImage = styled(Image)(() => ({
  width: "100%",
  height: "100%",
}));

const ButtonContainer = styled(View)(() => ({
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
}));

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

  return (
    <Container>
      <ImageContainer>
        {profileImage ? (
          <ProfileImage source={{ uri: profileImage }} />
        ) : (
          <Button type="clear" color="primary" title="Select Image" onPress={handleSelectImage} />
        )}
      </ImageContainer>
      <ButtonContainer>
        {profileImage && <Button title="Remove Image" onPress={() => setProfileImage(null)} />}
      </ButtonContainer> <View style={{ flex: 1 }} />
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
            // onPress={handleSubmit(onSubmit)}
            title={"Next"}
            style={{
              width: 100,
            }}
          />
        </ButtonContainer>
    </Container>
  );
};

export default ProfileImageUploaderStep;