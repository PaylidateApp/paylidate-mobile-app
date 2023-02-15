import React, { useState } from 'react';
import { Modal, View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';


const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }
  

  return (
    <View>
              <Button title="Open Modal" onPress={toggleModal} />
      <Modal visible={modalVisible} animationType="slide" onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
            <Text style={styles.title}>Enter Details</Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Label 1:</Text>
                    <TextInput style={styles.input} placeholder="Input 1" />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Label 2:</Text>
        <TextInput style={styles.input} placeholder="Input 2" />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Label 3:</Text>
        <TextInput style={styles.input} placeholder="Input 3" />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Label 4:</Text>
        <TextInput style={styles.input} placeholder="Input 4" />
      </View>
     </View>
     <TouchableOpacity style={styles.button} onPress={toggleModal}>
      <Text style={styles.buttonText}>Submit</Text>
     </TouchableOpacity>
     </View>
      </Modal>

    </View>
  )
}

export default MyComponent;
