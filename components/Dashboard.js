import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

import MainButton from "./MainButton";

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
          <MainButton style={styles.bigButton}>Send Funds</MainButton>
        </View>
      </View>
      <View style={styles.sectionTwo}>
        <View style={styles.flexStyle2}>
        <View style={styles.sectionTwoSub}>
        <Image source={require('../assets/dashboard/trophy.png')} />
        <Text>Dance</Text>
        </View>
        <View style={styles.sectionTwoSub}>
        <Image source={require('../assets/dashboard/trophy2.png')} />
        <Text>Dance</Text>
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
    backgroundColor: "#EB6117",
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
    width: 80,
    height: 65,
    // paddingTop: 15,
    // marginVertical: 20,
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
    color: "#ffffff",
  },
  buttonContainer: {
    marginLeft: 15,
    width: "90%",
  },
});

export default Dashboard;
