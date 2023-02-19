import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View,  Button, Switch, TouchableOpacity, } from 'react-native';

const OrderModal = () => {
  const [modalVisible, setModalVisible] = useState(false); // state to control the visibility of the modal
  const [switchValue, setSwitchValue] = useState(false); // state to store the value of the switch
  const [selectedRadio, setSelectedRadio] = useState(1); // state to store the value of the radio
  

  const handlePress = () => {
    // do something when the button is pressed
  };

  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
            
            
          
          <View style={styles.modalBody}>
          <View style={styles.ModalView}>
            <Text style={styles.amt}>Amount:</Text>
            <Text style={styles.fig}>N662,000</Text>
          </View>

          <View style={styles.ModalView1}>
            <Text style={styles.fee}>Escrow fee:</Text>
            <Text style={styles.fig1}>N2,500</Text>
           </View>

           <View style={styles.ModalView2}>
            <Text style={styles.total}>Total:</Text>
            <Text style={styles.fig2}>N664,500</Text>
           </View>

           <View style={styles.main}>
            <TouchableOpacity style={styles.wrap} onPress={()=>setSelectedRadio(1)}>
                <View style={styles.radioWrapper}>
                    <View style={styles.radio}>
                     {
                        selectedRadio===1 ?  <View style={styles.radioBg}></View>:null
                     }
                    </View>
                    <Text style={styles.radioText}>Your wallet</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.wrap1} onPress={()=>setSelectedRadio(2)}>
                <View style={styles.radioWrapper}>
                    <View style={styles.radio}>
                      {
                        selectedRadio===2 ?  <View style={styles.radioBg}></View>:null
                      }
                    </View>
                    <Text style={styles.radioText}>Your Linked Card</Text>
                </View>
            </TouchableOpacity>

           </View>
           
 


            <View style={styles.set}>
                <Text style={styles.modalText}>Escrow</Text>
                <Switch
                value={switchValue}
                onValueChange={(value) => setSwitchValue(value)}
                style={styles.switchField}
                />

            </View>
            <Button style={styles.modalBtn} title="Continue" onPress={handlePress} />
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
    backgroundColor: '#D9D9D9',
  },
  modalBody: {
    width: '100%',
    height: '80%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    padding: 20,
  },


ModalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:70,
}, 

amt: {
    fontSize: 20,
    marginLeft:75,
    textAlign: 'center',

},

fig: {
    fontSize: 20,
    marginRight:75,
    textAlign: 'center',

},

ModalView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:20,
},

fee: {
    fontSize: 20,
    marginLeft:75,
    textAlign: 'center',

},

fig1: {
    fontSize: 20,
    marginRight:75,
    textAlign: 'center',

},

ModalView2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:20,
},

total: {
    fontSize: 20,
    marginLeft:85,
    textAlign: 'center',
},

fig2: {
    fontSize: 20,
    marginRight:75,
    textAlign: 'center',

},

main: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginTop: 5,
},

wrap: {
    marginRight:43,
},

wrap1: {
    marginTop:13,
},

radioWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},



radio: {
    height:20,
    width:20,
    borderColor:'black',
    borderWidth:2,
    borderRadius:20,
    margin:2,
},

radioBg: {
    height:14,
    width:12,
    backgroundColor:'black',
    borderRadius:20,
    margin:1,
    marginLeft:2,
},

radioText: {
    fontSize:16
},


set: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:5,
},

modalText: {
    fontSize: 20,
    marginLeft:75,
    textAlign: 'center',

},

switchField: {
    fontSize: 20,
    marginRight:75,
    textAlign: 'center',

},

modalBtn: {
    color:'#fff',
    backgroundColor:'#fff',
    marginTop:5,
  },


  
});
  
export default OrderModal;
