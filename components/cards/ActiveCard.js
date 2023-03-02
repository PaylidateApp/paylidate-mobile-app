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

const ActiveCard = () => {
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
            <Text style={styles.bigTxt}>Linked Card</Text>
          </View>
        </View>
        {/* Header End */}

        {/* Card Starts */}
        <View style={{ paddingVertical: 45, alignItems: "center" }}>
          <View style={styles.cardStyle}>
            {/* Expiry Date and CVV */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 20,
                paddingBottom: 20,
              }}
            >
              <View >
                <Text style={styles.txt}> **** **** **** 0000</Text>
              </View>
              <View >
                <Text style={styles.txt}>MM/YY</Text>
              </View>
            </View>
            {/* Expiry Date and CVV End */}

            {/* Expiry Date and CVV */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 60,
                paddingBottom: 20,
              }}
            >
              <View style={{paddingVertical: 10}}>
                <Text style={styles.txt}> Lawrence Attah</Text>
              </View>
              <View style={{}}>
                <Text style={styles.greenText}>AfriGo</Text>
              </View>
            </View>
            {/* Expiry Date and CVV End */}
          </View>
        </View>
        {/* Card Ends */}

        <View style={{ alignItems: "center", width: '100%' }}>
          {/* Text */}
          <View>
            <Text style={styles.orangeTxt}>Card is Active</Text>
          </View>
          {/* Text ends */}

          {/* Remove Card button */}
          <View style={styles.btnContainer}>
            <TouchableHighlight style={styles.removeCardBtn}>
              <Text style={styles.removeCardBtnTxt}>Remove Card</Text>
            </TouchableHighlight>
          </View>
          {/* Remove Card button */}
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
    backgroundColor: "#E6CBBC",
    shadowColor: "#000000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  btnContainer: {
    alignItems: "center",
    marginVertical: 100,
    width: "85%",
  },
  removeCardBtn: {
    width: "85%",
    height: 40,
    backgroundColor: "#182430",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  removeCardBtnTxt: {
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
  greenText: {
    fontFamily: "Cabin",
    fontSize: 32,
    lineHeight: 39,
    color: "#58A662",
  },
  orangeTxt: {
    fontFamily: "Cabin",
    fontSize: 14,
    lineHeight: 17,
    color: '#EB6117'
  },
});

export default ActiveCard;
