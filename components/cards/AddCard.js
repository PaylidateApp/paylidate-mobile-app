import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput,
} from "react-native";

const AddCard = () => {
  return (
    <View style={styles.screen}>
      <View style={{ paddingVertical: 40 }}>
        {/* Card Number */}
        <View>
          <Text>Card Number</Text>
          <TextInput style={styles.input} placeholder="0000 0000 0000 0000 0000" />
        </View>
        {/* Card Number Ends */}

        {/* Expiry Date and CVV */}
        <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
          <View style={{width: "55%"}}>
            <Text> Expiry Date</Text>
            <TextInput style={styles.input} placeholder="MM/YY" />
          </View>
          <View style={{width: "32%"}}>
            <Text>CVC/CVV</Text>
            <TextInput style={styles.input} placeholder="123" />
          </View>
        </View>
        {/* Expiry Date and CVV End */}

        {/* Holder's Name */}
        <View>
          <Text>Holder's Name</Text>
          <TextInput style={styles.input} placeholder="Lawrence Attah" />
        </View>
        {/* Holder's Name End*/}

        {/* Add Card button */}
        <View style={styles.btnContainer}>
          <TouchableHighlight style={styles.post2CommunityBtn}>
            <Text style={styles.post2CommunityBtnTxt}>Add Card</Text>
          </TouchableHighlight>
        </View>
         {/* Add Card button */}
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
    backgroundColor: "#D9D9D9",
  },

  btnContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  post2CommunityBtn: {
    width: "85%",
    height: 40,
    backgroundColor: "#182430",
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
  input: {
    height: 50,
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
    textAlign: "center",
  },
});

export default AddCard;
