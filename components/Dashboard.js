import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

import MainButton from "./MainButton";
import Colors from "../constants/colors";

const Dashboard = () => {
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
            <Image
              style={styles.imageStyle2}
              source={require("../assets/dashboard/users.png")}
            />
            <Text style={styles.miniText}>Community Feed</Text>
          </View>
          <View>
            <Image
              style={styles.imageStyle2}
              source={require("../assets/dashboard/handshake.png")}
            />
            <Text style={styles.miniText}>My Deals</Text>
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
            <Image
              style={styles.imageStyle}
              source={require("../assets/dashboard/node.png")}
            />
            <Text style={styles.miniText}>My Network</Text>
          </View>
          <View>
            <Image
              style={styles.imageStyle2}
              source={require("../assets/dashboard/payment_wallet.png")}
            />
            <Text style={styles.miniText}>Payment Requests</Text>
          </View>
          <View>
            <Image
              style={styles.imageStyle}
              source={require("../assets/dashboard/payment.png")}
            />
            <Text style={styles.miniText}>Pay Bills</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton style={styles.bigButton}>Post to Community</MainButton>
        </View>
      </View>
      <View style={styles.listSection}>
        <View style={styles.listItemStyles}>
          <View style={styles.listItemsPicContainer}>
            <Image
              style={styles.listItemsPic}
              source={require("../assets/dashboard/camera.png")}
            />
          </View>
          <View style={styles}>
            <View style={styles.listItemsTxtContainer}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text style={[styles.miniText, styles.miniTextPosition2]}>
                  @AttahLaw
                </Text>

                <Image
                  style={styles.miniImg}
                  source={require("../assets/dashboard/verify_primary.png")}
                />
              </View>
              <View>
                <Text style={styles.smallTextDark}>
                  Nikon Camera DSLI XP 600
                </Text>
              </View>
            </View>
            <View style={styles.listItemsTxtContainer}>
              <View>
                <Text
                  style={[styles.smallTextDark, styles.smallTextDarkPosition]}
                >
                  N660,000
                </Text>
              </View>
            </View>
            <View style={styles.listItemsTxtContainer}>
              <View style={styles.listItemsTxt}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={styles.microImg}
                    source={require("../assets/dashboard/location.png")}
                  />
                  <Text style={styles.microText}>Abuja</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={styles.microImgTruck}
                    source={require("../assets/dashboard/truck.png")}
                  />
                  <Text style={styles.microText}>Nigeria Wide</Text>
                </View>
              </View>
            </View>
            <View style={styles}>
              <View style={styles.listItemsTxt}>
                <View>
                  <Image
                    style={styles.commentImg}
                    source={require("../assets/dashboard/comment.png")}
                  />
                </View>
                <View style={styles.listItemsTxt}>
                  <Text style={[styles.miniText, styles.miniTextPosition]}>
                    10
                  </Text>
                  <Image
                    style={styles.likeImg}
                    source={require("../assets/dashboard/like.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
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
  listItemStyles: {
    flexDirection: "row",
    width: "95%",
    height: 160,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderColor: "#dddddd",
  },
  listItemsPicContainer: {
    width: "45%",
    height: 160,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 0.8,
    // borderLeftWidth: 1.8,
    // borderRightWidth: 1.8,
    borderColor: "#000000",
  },
  listItemsPic: {
    width: "100%",
    //height: 158,
  },
  listItemsTxtContainer: {
    width: "95%",
    borderBottomWidth: 1,
    //borderRadius: 12,
    borderColor: "#dddddd",
  },
  listItemsTxt: {
    flexDirection: "row",
    justifyContent: "space-around",
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
  smallTextDark: {
    fontSize: 10,
    fontWeight: "normal",
    lineHeight: 12,
    textAlign: "left",
    paddingHorizontal: 25,
    paddingVertical: 8,
  },
  smallTextDarkPosition: {
    paddingVertical: 7,
  },
  miniText: {
    fontSize: 8,
    fontWeight: "normal",
    lineHeight: 10,
    color: "#000000",
    textAlign: "center",
    paddingTop: 8,
  },
  miniTextPosition: {
    textAlign: "left",
    paddingHorizontal: 5,
    paddingTop: 15,
  },
  miniTextPosition2: {
    textAlign: "left",
    paddingHorizontal: 25,
    paddingTop: 15,
  },
  microText: {
    fontSize: 6,
    fontWeight: "normal",
    lineHeight: 7,
    textAlign: "left",
    paddingHorizontal: 5,
    paddingTop: 15,
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
  miniImg: {
    height: 13,
    width: 13,
    marginTop: 12,
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
  commentImg: {
    width: 12.5,
    height: 12.5,
    marginTop: 11,
    marginBottom: 5,
    marginRight: 12,
  },
  likeImg: {
    width: 15,
    height: 13,
    marginTop: 11,
    marginBottom: 5,
    marginHorizontal: 2,
  },
});

export default Dashboard;
