import React from "react";
import { View, Image, Text, StyleSheet, Alert, TouchableHighlight } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const ImgPicker = (props) => {
  const verifyPermissions = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync(Permissions.CAMERA);
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    ImagePicker.launchImageLibraryAsync();
  };

  return (
    <View style={styles.imagePreview}>

      <View style={styles.btnContainer}>
          <TouchableHighlight style={styles.post2CommunityBtn} onPress={takeImageHandler}>
            <Text style={styles.post2CommunityBtnTxt}>Choose Files</Text>
          </TouchableHighlight>
        </View>
      <View style={styles.txtContainerStyles}>
        <Text style={styles.txtStyle}>Add Image</Text>
        <Image style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePreview: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderWidth: 1,
    marginVertical: 12,
    borderRadius: 8,
    padding: 10,
  },
  // image: {
  //   width: '100%',
  //   height: '100%'
  // },
  txtContainerStyles: {
    paddingHorizontal: 2
  },
  txtStyle: {
    paddingHorizontal: 4,
    paddingVertical: 4,
    fontFamily: "Cabin",
    fontSize: 14,
    lineHeight: 17,
    color: " #707070",
  },
  btnContainer: {
    width: "30%",
    borderWidth: 1,
    borderColor: ' #808080',
  },
  post2CommunityBtn: {
    width: "100%",
    height: 25,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ImgPicker;
