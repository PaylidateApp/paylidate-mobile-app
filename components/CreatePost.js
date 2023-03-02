import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput,
} from "react-native";

import ImgPicker from "./ImagePicker";

const PostItem = () => {
  return (
    <View style={styles.screen}>
      <View style={{paddingVertical: 40}}>
        {/* Add Image */}
        <View>
          <ImgPicker />
        </View>
        {/* Add Image Ends */}

        {/* Product/Service Name */}
        <View>
          <TextInput style={styles.input} placeholder="Product/Service name" />
        </View>
        {/* Product/Service Name End */}

        {/* Price */}
        <View>
          <TextInput style={styles.input} placeholder="Price if fixed" />
        </View>
        {/* Price End*/}

        {/* Available Quantity */}
        <View>
          <TextInput style={styles.input} placeholder="Available quantity" />
        </View>
        {/* Available Quantity End */}

        {/* Product/Service Description */}
        <View>
          <TextInput
            placeholder="Product/Service description"
            editable
            multiline
            numberOfLines={6}
            maxLength={80}
            style={styles.inputTextField}
          />
        </View>
        {/* Product/Service Description */}

        {/* Referral Amount */}
        <View style={{ paddingHorizontal: 5, paddingVertical: 10 }}>
          <Text style={styles.txt}>
            If you want this product to be referred by others, please add a
            referral bonus else live the field blank
          </Text>
        </View>

        <View>
          <TextInput style={styles.input} placeholder="Referral amount" />
        </View>
        {/* Referral Amount End */}

        {/* Create Post button */}
        <View style={styles.btnContainer}>
          <TouchableHighlight style={styles.post2CommunityBtn}>
            <Text style={styles.post2CommunityBtnTxt}>Create Post</Text>
          </TouchableHighlight>
        </View>
        {/* Create Post button ends */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 35,
    width: "100%",
    height: "100%",
    backgroundColor: "#D9D9D9",
  },

  btnContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  post2CommunityBtn: {
    width: "85%",
    height: 40,
    backgroundColor: "#182430",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  post2CommunityBtnTxt: {
    fontFamily: "Cabin",
    fontSize: 14,
    lineHeight: 17,
    color: "#fff",
  },
  input: {
    height: 50,
    marginVertical: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  inputTextField: {
    marginVertical: 12,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  txt: {
    fontFamily: "Cabin",
    fontSize: 14,
    lineHeight: 17,
    textAlign: "center",
  },
});

export default PostItem;
