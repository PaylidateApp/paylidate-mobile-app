import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View, TextInput, Button,  } from 'react-native';

const ViewModal = () => {
  const [modalVisible, setModalVisible] = useState(false); // state to control the visibility of the modal
  const [amountValue, setAmountValue] = useState(''); // state to store the value of the input field
  const [dropdownValue, setDropdownValue] = useState(''); // state to store the value of the dropdown field
  const [textareaValue, setTextareaValue] = useState(''); // state to store the value of the textarea field

  const handlePress = () => {
    // do something when the button is pressed
  };

  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          
          <View style={styles.modalBody}>
            <Text
              style={styles.inputField}
              value={amountValue}
              onChangeText={(text) => setAmountValue(text)}
              placeholder="Order quantity"
            />
            {/* <Picker
              selectedValue={dropdownValue}
              style={styles.dropdownField}
              onValueChange={(value) => setDropdownValue(value)}
            >
              <Picker.Item label="Option 1" value="option1" />
              <Picker.Item label="Option 2" value="option2" />
              <Picker.Item label="Option 3" value="option3" />
            </Picker> */}
            <TextInput
              style={styles.textareaField}
              value={textareaValue}
              onChangeText={(text) => setTextareaValue(text)}
              placeholder="Other specifications"
              multiline={true}
            />
            <Button style={styles.modalBtn} title="Order" onPress={handlePress} />
            <Text style={styles.modalText}>After sending this order, you will get a payment request with the final amount including delivery if required.</Text>
          </View>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    modalBody: {
      width: '100%',
      height: '50%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: '#D9D9D9',
      padding: 20,
    },
    inputField: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 30,
      backgroundColor: '#fff',
    },
    dropdownField: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 10,
      backgroundColor: '#fff',
    },
    textareaField: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      height: 100,
      textAlignVertical: 'top',
    },

    modalBtn: {
        color:'#fff',
    },

    modalText: {
        fontSize:14,
    margin: 20,
    marginLeft: 40,
      justifyContent:'center',
      alignItems: 'center',

    },
  });
  
export default ViewModal;
