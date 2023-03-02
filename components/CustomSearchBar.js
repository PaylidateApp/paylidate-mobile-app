import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const CustomSearchBar = (props) => {
  return (
    
    <View style={styles.searchContainer}>
      {/* icon */}
      <View style={{ ...styles.searchIcon, ...props.style}}>
        <Ionicons name="search" size={22} color="black" />
      </View>
      <TextInput
        style={{ ...styles.input, ...props.style}}
        placeholder="Enter Username or Phone number to search"
      />
    </View>

  );
};

const styles = StyleSheet.create({
    searchContainer: {
      flexDirection: "row",
      marginVertical: 12,
      marginHorizontal: 35,
    },
    input: {
      height: 40,
      width: '88%',
      // margin: 12,
      // borderWidth: 1,
      borderRightWidth: 1,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      // borderRadius: 20,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      paddingRight: 10,
    },
    searchIcon: {
      width: 40,
      height: 40,
      paddingTop: 8,
      alignItems: "center",
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      borderLeftWidth: 1,
      borderTopWidth: 1,
      borderBottomWidth: 1,
    },
});

export default CustomSearchBar;
