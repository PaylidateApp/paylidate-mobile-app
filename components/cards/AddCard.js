import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AddCard = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        {/* Header */}
        <View style={styles.headerStyle}>
          <View style={{ flexDirection: "row", width: "40%" }}>
            <Ionicons name="chevron-back" size={20} color="black" />
            <Text style={styles.txt}>Home</Text>
          </View>
          <View>
            <Text style={styles.bigTxt}>Add Card</Text>
          </View>
        </View>
        {/* Header End */}

        <View style={{ paddingVertical: 45, alignItems: "center" }}>
          <View style={styles.cardStyle}>
            {/* Card Number */}
            <View>
              <Text style={styles.txt}>Card Number</Text>
              <TextInput
                style={styles.input}
                placeholder="0000 0000 0000 0000 0000"
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={24}
              />
            </View>
            {/* Card Number Ends */}

            {/* Expiry Date and CVV */}
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ width: "55%" }}>
                <Text style={styles.txt}> Expiry Date</Text>
                <TextInput
                  style={styles.input}
                  placeholder="MM/YY"
                  blurOnSubmit
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="number-pad"
                  maxLength={5}
                />
              </View>
              <View style={{ width: "32%" }}>
                <Text style={styles.txt}>CVC/CVV</Text>
                <TextInput
                  style={styles.input}
                  placeholder="123"
                  blurOnSubmit
                  textAlign="center"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="number-pad"
                  maxLength={3}
                />
              </View>
            </View>
            {/* Expiry Date and CVV End */}

            {/* Holder's Name */}
            <View>
              <Text style={styles.txt}>Holder's Name</Text>
              <TextInput style={styles.input} placeholder="Holder's Name" />
            </View>
            {/* Holder's Name End*/}

            {/* Add Card button */}
            <View style={styles.btnContainer}>
              <TouchableHighlight style={styles.addCardBtn}>
                <Text style={styles.addCardBtnTxt}>Add Card</Text>
              </TouchableHighlight>
            </View>
            {/* Add Card button */}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 35,
    width: "100%",
    height: "100%",
    backgroundColor: "#D9D9D9",
  },

  headerStyle: {
    flexDirection: "row",
    paddingVertical: 12,
  },

  cardStyle: {
    width: "95%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#FFF8F4",
    shadowColor: "#000000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  btnContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  addCardBtn: {
    width: "85%",
    height: 40,
    backgroundColor: "#182430",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  addCardBtnTxt: {
    fontFamily: "Cabin",
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  inputTextField: {
    marginVertical: 12,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  txt: {
    fontFamily: "Cabin",
    fontSize: 14,
    lineHeight: 17,
  },
  bigTxt: {
    fontFamily: "Cabin",
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
  },
});

export default AddCard;
