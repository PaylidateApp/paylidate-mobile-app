import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

// import ProductListItem from "./ProductListItem";
import CustomSearchBar from "../components/CustomSearchBar";
import { dummyProducts } from "../constants/dummyTransaction";
import { FlatList } from "react-native";
import { Product } from "../components/Product";
import instance from "../config/ApiManager";

const MyCommunityScreen = () => {
  const navigation = useNavigation();

  const createPostPage = async () => {
    navigation.navigate("CreatePost");
  };
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      console.log("Product useEffect() fired");
      setIsLoading(true);

      try {
        const response = await instance.get('/api/product');
        if (response.data.status === 'success') {
          setProducts(dummyProducts);
          // console.log(dummyProducts);
        }

      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);


  return (
    <View style={styles.screen}>
      {
        isLoading ? <ActivityIndicator size="large" color="#EB6117" style={{ justifyContent: "center", alignItems: "center" }} /> :
          <>
            {/* Search bar component */}
            <View style={styles.searchbarContainer}>
              <CustomSearchBar style={styles.searchbar}></CustomSearchBar>
            </View>
            {/* Search bar component */}

            {/* Post to community button */}
            <View style={styles.btnContainer}>

              <TouchableHighlight onPress={createPostPage} style={styles.post2CommunityBtn}>
                <Text style={styles.post2CommunityBtnTxt}>Post to Community</Text>
              </TouchableHighlight>
            </View>
            {/* Post to community button ends */}

            {/* section three */}
            <View>
              {/* product list section */}
              <View style={styles.listSection}>
                {/* <ProductListItem /> */}
                <FlatList
                  data={products}
                  horizontal={false}
                  renderItem={({ item }) => (
                    <Product
                      userName={item.user.name}
                      productName={item.name}
                      amount={item.price}
                      location={item.id}
                      onPress={() => { navigation.navigate('Product', { productSlug: item.slug }) }}
                    />
                  )}

                  keyExtractor={(item) => item.id}
                />
              </View>
              {/* product list section end */}
            </View>
            {/* section three ends */}
          </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    padding: 35,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
  },

  searchbarContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  searchbar: {
    backgroundColor: "#D9D9D9",
    borderColor: "#999999",
    borderWidth: 0.1,
    fontSize: 10,
    lineHeight: 12,
    color: "#525252",
  },

  btnContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  post2CommunityBtn: {
    width: "85%",
    height: 30,
    backgroundColor: "#EB6117",
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
  listSection: {
    height: "100%",
    marginVertical: 10,
    alignItem: "center",
  },
});

export default MyCommunityScreen;
