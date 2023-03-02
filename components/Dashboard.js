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

  const checkActiveCards = async () => {
    navigation.navigate("ActiveCardScreen");
  };

  const sendfunds_navigation = async () => {
    navigation.navigate("SendFunds");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text>Hello, Lawrence</Text>
      </View>
      <View style={styles.sectionOne}>
        <View style={styles.flexStyle}>
          <Text style={styles.bigText}>N329,000</Text>
          {/* Fund Wallet button */}
          <View >
            <TouchableHighlight
              style={styles.smallBtn}
            >
              <Text style={styles.smallBtnTxt}>Fund Wallet</Text>
            </TouchableHighlight>
          </View>
          {/* Fund button ends */}
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
        {/* Send funds button */}
        <View style={styles.btnContainer}>
          <TouchableHighlight
            style={styles.sendFundsBtn}
            onPress={sendfunds_navigation}
          >
            <Text style={styles.sendFundsBtnTxt}>Send Funds</Text>
          </TouchableHighlight>
        </View>
        {/* Send funds button ends */}
      </View>

      {/* Section Two  */}
      <View style={styles.sectionTwo}>
        <View style={styles.flexStyle2}>
          <View style={styles.sectionTwoSub}>
            <Image
              style={styles.imgStyleSec2}
              source={require("../assets/dashboard/trophy.png")}
            />
            <Text style={styles.smallTextSecTwo}>117 PPTs</Text>
          </View>
          <View style={styles.sectionTwoSub}>
            <Image
              style={styles.imgStyleSec2}
              source={require("../assets/dashboard/trophy2.png")}
            />
            <Text style={styles.smallTextSecTwo}>N 2,500</Text>
          </View>
        </View>
      </View>
      {/* Section Two ends */}

      <View>
        <View style={styles.sectionThree}>
          <View>
            <TouchableHighlight onPress={checkActiveCards}>
              <Image
                style={[styles.imageStyle2, styles.imgPositionLeft]}
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
              style={[styles.imageStyle, styles.imgPositionLeft]}
              source={require("../assets/dashboard/verified.png")}
            />
            <Text style={styles.miniText}>Fulfillment</Text>
          </View>
        </View>
        <View style={styles.sectionThree}>
          <View>
            <TouchableHighlight onPress={checkMyNetwork}>
              <Image
                style={[styles.imageStyle, styles.imgPositionLeft]}
                source={require("../assets/dashboard/node.png")}
              />
            </TouchableHighlight>
            <Text style={styles.miniText}>My Network</Text>
          </View>
          <View>
            {/* section three ends */}
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

          {/* 
            <Image
              style={[styles.imageStyle2, styles.imgPositionLeft]}
              source={require("../assets/dashboard/payment_wallet.png")}
            />
          */}
            <Text style={styles.miniText}>Payment Requests</Text>
          </View>
          <View>
          {/* 
            <Image
              style={styles.imageStyle}
              source={require("../assets/dashboard/payment.png")}
            />
          */}
            
            
            <TouchableHighlight onPress={checkAddCards}>
              <Image
                style={styles.imageStyle}
                source={require("../assets/dashboard/payment.png")}
              />
            </TouchableHighlight>
            
          

            <Text style={styles.miniText}>Pay Bills</Text>
          </View>
        </View>

        {/* Post to Community button */}
        <View style={styles.btnContainer}>
          <TouchableHighlight
          onPress={checkMyCommunity}
            style={styles.postCommunityBtn}
         >
            <Text style={styles.postCommunityBtnTxt}>Post to Community</Text>
          </TouchableHighlight>
        </View>
        {/* Post to Community button ends */}
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
    height: 133,
    paddingTop: 15,
    borderRadius: 8,
    backgroundColor: "#F6A67B",
  },
  sectionTwo: {
    width: "100%",
    height: 66,
    marginVertical: 20,
    borderRadius: 8,
    backgroundColor: "#489451",
  },
  sectionTwoSub: {
    width: 60,
    height: 49,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#88C58F",
  },
  flexStyle: {
    flexDirection: "row",
    width: "90%",
    marginHorizontal: 15,
    paddingTop: 3,
    paddingBottom: 4,
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
    height: 800,
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
    lineHeight: 15,
    fontWeight: "normal",
  },
  smallText: {
    fontSize: 10,
    fontWeight: "normal",
    lineHeight: 12,
    color: "#ffffff",
    textAlign: "center",
  },
  smallTextSecTwo: {
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: 15,
    color: "#ffffff",
    textAlign: "center",
  },
  miniText: {
    fontSize: 10,
    fontWeight: "bold",
    lineHeight: 12,
    color: "#000000",
    textAlign: "center",
    paddingTop: 8,
  },

  btnContainer: {
    alignItems: "center",
    // marginVertical: 10,
  },
  sendFundsBtn: {
    width: "90%",
    height: 25,
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  sendFundsBtnTxt: {
    fontFamily: "Cabin",
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
    color: "#000",
  },
  postCommunityBtn:{
    width: "90%",
    height: 30,
    backgroundColor: "#EB6117",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  postCommunityBtnTxt: {
    fontFamily: "Cabin",
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  smallBtn: {
    width: "100%",
    height: 28,
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  smallBtnTxt: {
    fontFamily: "Cabin",
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 17,
    color: "#000",
    paddingHorizontal: 3,
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
    width: 20.33,
    height: 18.11,
    marginVertical: 4,
  },
  imgPositionRight: {
    marginRight: 33,
  },
  imgPositionLeft: {
    marginLeft: 10,
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
