import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import instance from "../config/ApiManager";
import { Product } from "./Product";
import { useNavigation } from "@react-navigation/native";

const ProductLists = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    userName: "@MrsVso",
    productName: "Nikon Camera DSLI XP 600",
    amount: "N660,000",
    location: "Kaduna",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    userName: "@Ivan_moneyman",
    productName: "Nikon Camera DSLI XP 600",
    amount: "N660,000",
    location: "Abuja",
  },
  {
    id: "5869-bd96-145571e29d72",
    userName: "@Syflex360",
    productName: "Nikon Camera DSLI XP 600",
    amount: "N660,000",
    location: "Benin",
  },
  {
    id: "bd7acbea-c1b1-46c2ad53abb28ba",
    userName: "@DavidShegs",
    productName: "Nikon Camera DSLI XP 600",
    amount: "N660,000",
    location: "Jos",
  },
  {
    id: "3ac68afc-c605-48d31aa97f63",
    userName: "@AttahLaw",
    productName: "Nikon Camera DSLI XP 600",
    amount: "N660,000",
    location: "Lagos",
  },
  {
    id: "71f-bd96-145571e29d72",
    userName: "@Ferdinand",
    productName: "Nikon Camera DSLI XP 600",
    amount: "N660,000",
    location: "Oyo",
  },
  {
    id: "c1b1-46c2-aed5-3ad53abb28ba",
    userName: "@Lily",
    productName: "Nikon Camera DSLI XP 600",
    amount: "N660,000",
    location: "Kogi",
  },
  {
    id: "3ac68afc-48d3-a4f8-fbd91aa97f63",
    userName: "@Dannyadegoke",
    productName: "Nikon Camera DSLI XP 600",
    amount: "N660,000",
    location: "Lagos",
  },
  {
    id: "58694a0f-471f-bd96-145571e29d72",
    userName: "@MrsVSO",
    productName: "Nikon Camera DSLI XP 600",
    amount: "N660,000",
    location: "Kano",
  },
];


const ProductListItem = () => {
  const navigation = useNavigation();

  // useEffect(() => {
  //   (async () => {
  //     res = await instance.get('/api/products');
  //   })

  //   return () => {
  //     second
  //   }
  // }, [third])


  return (
    <View style={styles.screen}>
      <FlatList
        data={ProductLists}
        horizontal={false}
        renderItem={({ item }) => (
          <Product
            userName={item.userName}
            productName={item.productName}
            amount={item.amount}
            location={item.location}
            onPress={() => { navigation.navigate('Product', { productSlug: item.id }) }}
          />
        )}

        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
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
    height: 159,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 0.8,
    // borderLeftWidth: 1.8,
    // borderRightWidth: 1.8,
    borderColor: "#000000",
  },
  listItemsPic: {
    width: "100%",
    height: 158,
  },
  listItemsTxtContainer: {
    width: "95%",
    borderBottomWidth: 1,
    //borderRadius: 12,
    borderColor: "#dddddd",
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
  miniImg: {
    height: 13,
    width: 13,
    marginTop: 12,
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
  listItemsTxt: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  likeImg: {
    width: 15,
    height: 13,
    marginTop: 11,
    marginBottom: 5,
    marginHorizontal: 2,
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
});

export default ProductListItem;
