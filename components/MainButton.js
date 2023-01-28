import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#D9D9D9',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 15
    },
    buttonText: {
        color: '#000000',
        fontFamily: 'Cabin',
        fontSize: 12,
        textAlign: 'center'
    }
});

export default MainButton;
