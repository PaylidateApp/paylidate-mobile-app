import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/colors"

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.style}}>
      <Text style={{ ...styles.buttonText, ...props.style}}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.accent,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 15
    },
    buttonText: {
        color: '#000000',
        //fontFamily: 'Cabin',
        fontSize: 12,
        fontWeight: "normal",
        textAlign: 'center'
    }
});

export default MainButton;
