import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import MainButton from "./MainButton";
import ProductListItem from "./ProductListItem";
import Colors from "../constants/colors";

const Dashboard = () => {
  const navigation = useNavigation();

  const checkMyNetwork = async () => {
    navigation.navigate("MyNetworkScreen");
  };

  const checkUserProfile = async () => {
    navigation.navigate("UserProfileScreen");
  };

  const checkMyCommunity = async () => {
    navigation.navigate("MyCommunityScreen");
  };

  const checkAddCards = async () => {
    navigation.navigate("AddCardScreen");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text>Hello, Lawrence</Text>
      </View>
      <View style={styles.sectionOne}>
        <View style={styles.flexStyle}>
          <Text style={styles.bigText}>N329,000</Text>
          <MainButton>Fund Wallet</MainButton>
        </View>
        <View style={styles.flexStyle}>
          <View>
            <Text style={styles.mediumText}>@AttahLaw</Text>
          </View>
          <View>
            <Text style={styles.mediumText}>7123467390</Text>
            <Text style={styles.smallText}>Sterling Bank</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton>Send Funds</MainButton>
        </View>
      </View>
      <View style={styles.sectionTwo}>
        <View style={styles.flexStyle2}>
          <View style={styles.sectionTwoSub}>
            <Image
              style={styles.imgStyleSec2}
              source={require("../assets/dashboard/trophy.png")}
            />
            <Text style={styles.smallText}>117 PPTs</Text>
          </View>
          <View style={styles.sectionTwoSub}>
            <Image
              style={styles.imgStyleSec2}
              source={require("../assets/dashboard/trophy2.png")}
            />
            <Text style={styles.smallText}>N 2,500</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.sectionThree}>
          <View>
            <TouchableHighlight onPress={checkMyCommunity}>
              <Image
                style={styles.imageStyle2}
                source={require("../assets/dashboard/users.png")}
              />
            </TouchableHighlight>
            <Text style={styles.miniText}>Community Feed</Text>
          </View>
          <View>
            <Image
              style={[styles.imageStyle2, styles.imgPositionRight]}
              source={require("../assets/dashboard/handshake.png")}
            />
            <Text style={[styles.miniText, styles.imgPositionRight]}>
              My Deals
            </Text>
          </View>
          <View>
            <Image
              style={styles.imageStyle}
              source={require("../assets/dashboard/verified.png")}
            />
            <Text style={styles.miniText}>Fulfillment</Text>
          </View>
        </View>
        <View style={styles.sectionThree}>
          <View>
            <TouchableHighlight onPress={checkMyNetwork}>
              <Image
                style={styles.imageStyle}
                source={require("../assets/dashboard/node.png")}
              />
            </TouchableHighlight>
            <Text style={styles.miniText}>My Network</Text>
          </View>
          <View>
            <TouchableHighlight onPress={checkUserProfile}>
              <Image
                style={styles.imageStyle2}
                source={require("../assets/dashboard/payment_wallet.png")}
              />
            </TouchableHighlight>

            {/* 
          <Image
              style={styles.imageStyle2}
              source={require("../assets/dashboard/payment_wallet.png")}
            />
          */}

            <Text style={styles.miniText}>Payment Requests</Text>
          </View>
          <View>
            <TouchableHighlight onPress={checkAddCards}>
              <Image
                style={styles.imageStyle}
                source={require("../assets/dashboard/payment.png")}
              />
            </TouchableHighlight>

            {/* 
            
            <Image
              style={styles.imageStyle}
              source={require("../assets/dashboard/payment.png")}
            />
            
          */}

            <Text style={styles.miniText}>Pay Bills</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton style={styles.bigButton}>Post to Community</MainButton>
        </View>
      </View>

      {/* product list section */}
      <View style={styles.listSection}>
        <ProductListItem />
      </View>
      {/* product list section end */}
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
  textContainer: {
    padding: 10,
  },
  sectionOne: {
    width: "100%",
    height: 180,
    paddingTop: 15,
    borderRadius: 8,
    backgroundColor: Colors.primary,
  },
  sectionTwo: {
    width: "100%",
    height: 90,
    paddingTop: 4,
    marginVertical: 20,
    borderRadius: 8,
    backgroundColor: "#489451",
  },
  sectionTwoSub: {
    width: 75,
    height: 65,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#88C58F",
  },
  flexStyle: {
    flexDirection: "row",
    width: "90%",
    marginHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "space-between",
  },
  flexStyle2: {
    flexDirection: "row",
    width: "90%",
    marginHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "space-around",
  },
  sectionThree: {
    flexDirection: "row",
    width: "90%",
    marginHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "space-between",
  },
  listSection: {
    width: "100%",
    height: 180,
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    marginVertical: 20,
    borderColor: Colors.primary,
    alignItem: "center",
  },

  bigText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
  mediumText: {
    fontSize: 12,
    fontWeight: "normal",
  },
  smallText: {
    fontSize: 10,
    fontWeight: "normal",
    lineHeight: 12,
    color: "#ffffff",
    textAlign: "center",
  },
  miniText: {
    fontSize: 8,
    fontWeight: "normal",
    lineHeight: 10,
    color: "#000000",
    textAlign: "center",
    paddingTop: 8,
  },

  buttonContainer: {
    marginLeft: 15,
    width: "90%",
  },
  bigButton: {
    backgroundColor: Colors.primary,
    color: "#ffffff",
  },
  imageStyle: {
    width: 37,
    height: 37,
  },
  imageStyle2: {
    maxWidth: 55,
    maxHeight: 37,
  },
  imgStyleSec2: {
    width: 25,
    height: 22,
    marginVertical: 10,
  },
  imgPositionRight: {
    marginRight: 33,
  },
  microImg: {
    height: 10,
    width: 8,
    marginTop: 13,
    marginBottom: 7,
    marginLeft: 6,
  },
  microImgTruck: {
    height: 7,
    width: 10,
    marginTop: 15,
    marginBottom: 7,
  },
});

export default Dashboard;
