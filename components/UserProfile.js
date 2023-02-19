import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
} from "react-native";

import ProductListItem from "./ProductListItem";

const UserProfile = () => {
  return (
    <View style={styles.screen}>
      {/* section one Star Rating */}
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={styles.headerTxt}>4.75</Text>
        <Image style={styles.smallImg} source={require("../assets/userProfile/star.png")} />
      </View>
      {/* section one Star Rating ends */}

      {/* section two Main Section */}
      <View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image style={styles.bigImg} source={require("../assets/userProfile/userPic.png")} />
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text style={styles.bigTxt}>Victoria Owolijah</Text>
          <Text style={styles.bigTxt}>@MrsVSO</Text>
        </View>
        <View style={{
          alignItems: 'flex-start'
        }}>
          <Text style={styles.smallTxt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableHighlight style={styles.editProfileBtn}>
            <Text style={styles.editProfileBtnTxt}>Edit Profile</Text>
          </TouchableHighlight>
        </View>
      </View>
      {/* section two Main Section ends */}

      {/* section three */}
      <View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text style={styles.headerTxt}>My Catalog</Text>
        </View>
        <View>
          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
        </View>
      </View>
      {/* section three ends */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 35,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  headerTxt: {
    fontFamily: "Cabin",
    fontSize: 16,
    lineHeight: 19,
    paddingVertical:5,
  },
  bigTxt: {
    fontFamily: "Cabin",
    fontSize: 14,
    lineHeight: 17,
    paddingVertical:5,
  },
  smallTxt: {
    fontFamily: "Cabin",
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    paddingVertical:5,
  },

  bigImg: {
    width: 120,
    height: 120,
  },

  smallImg: {
    marginHorizontal: 5,
    marginVertical: 5,
  },

  btnContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  editProfileBtn: {
    width: "85%",
    height: 25,
    backgroundColor: "#182430",
    shadowColor: "black",
    shadowOffset: { width: 3, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  editProfileBtnTxt: {
    fontFamily: "Cabin",
    fontSize: 14,
    lineHeight: 17,
    color: "#fff",
  },
});

export default UserProfile;
