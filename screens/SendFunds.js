import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FONTS } from '../constants/theme'
import DropDownPicker from 'react-native-dropdown-picker';
import Navigation from '../components/Navigation';
// import Tabs from '../components/tabs';

const SendFunds = () => {

  const [display, setDisplay] = useState('')
  const [showPaylidateUser, setShowPaylidateUser] = useState(false)




  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ]);

  const data = ['Access bank', 'Gt bank']


  return (

    <SafeAreaView style={styles.container}>


      <Text style={styles.screentitle}>Send Funds</Text>

      {/* send funds container */}

      <View style={styles.sendfunds_container}>
        <Text style={styles.sendbankactt}>Amount</Text>
        <View style={styles.amountcontainer}>
          <Text style={styles.amount}>N250,000</Text>
        </View>

        {/* Send to bank account */}


        {['Send to bank account', 'Send to Paylidate user'].map((index) => (


          <View style={styles.sendtobankactcontainer} key={index}>
            {/* radio button */}

            <TouchableOpacity style={styles.radiobutton} onPress={() => { setDisplay(index); setShowPaylidateUser(!showPaylidateUser) }}>
              {
                display === index && <View style={styles.inner}></View>
              }
            </TouchableOpacity>

            <Text style={styles.radiobtnlabel}>{index}</Text>

          </View>


        ))


        }

        {
          showPaylidateUser ? <View style={styles.wrapper}>
            <Text style={styles.sendbankact}>Select User</Text>


            <DropDownPicker
              open={open}
              value={value}
              items={items}
              style={styles.dropDownPicker}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />




            <Text style={styles.sendbankactt}>Confirm User</Text>

            <View style={styles.paylidateuserwrapper}>
              <Text style={styles.paylidateacctname} >
                Attah Lawrence
              </Text>



            </View>



            <View style={styles.paylidatebtnwrapper}>
              <TouchableOpacity style={styles.sendfundsbtn}>
                <Text style={styles.sendtext}>Send</Text>
              </TouchableOpacity>
            </View>



          </View> : <View style={styles.wrapper}>
            <Text style={styles.sendbankactt}>Select Bank</Text>


            <DropDownPicker
              open={open}
              value={value}
              items={items}
              style={styles.dropDownPicker}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              dropDownContainerStyle={{
                width: 240,
                marginLeft: 50,
                borderColor: '#969696',
              }}
            />



            <Text style={styles.sendbankactt}>Enter Account Number</Text>

            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <TextInput style={styles.acctnamewrapper}
              />
            </KeyboardAvoidingView>


            <Text style={styles.sendbankactt}>Verify Account Name</Text>

            <View style={styles.acctnamewrapper}>
              <Text style={styles.accttext} >
                User Accountname
              </Text>



            </View>



            <View style={styles.sendfundsbtnwrapper}>
              <TouchableOpacity style={styles.sendfundsbtn}>
                <Text style={styles.sendtext}>Send</Text>
              </TouchableOpacity>
            </View>



          </View>
        }





      </View>


      {/* <Navigation></Navigation> */}
      <View>

      </View>
      {/* <Tabs /> */}
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#FBFFFD',
    height: '100%',

  },
  sendfundsbtnwrapper:
  {
    paddingBottom: 20
  },

  paylidatebtnwrapper:
  {
    marginTop: 90
  },
  screentitle:
  {
    fontFamily: FONTS.cabin,
    marginTop: 41,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dropDownPicker:
  {
    width: 240,
    height: 40,
    marginLeft: 50,
    marginRight: 50,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
    borderColor: '#969696',
    fontFamily: FONTS.cabin,
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 80,


  },
  acctnamewrapper:
  {
    borderWidth: 1,
    borderRadius: 8,
    width: 240,
    height: 40,
    marginTop: 8,
    borderColor: '#969696',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    fontFamily: FONTS.cabin,

  },
  paylidateuserwrapper:
  {
    borderWidth: 1,
    borderRadius: 8,
    width: 240,
    height: 40,
    marginTop: 8,
    alignItems: 'center',
    borderColor: '#969696',
  },

  accttext: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: FONTS.cabin,

  },

  paylidateacctname: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: FONTS.cabin,
    color: ' #717171',

  },

  sendfundsbtn: {
    backgroundColor: '#182430',
    width: 269,
    height: 30,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 25,

  },

  sendtext: {
    color: 'white',
    fontFamily: FONTS.cabin,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,

  },

  wrapper:
  {
    alignItems: 'center',
    marginTop: 17,
  },

  radiobtnlabel:
  {
    marginTop: 2,
    marginLeft: 10,
    fontFamily: FONTS.cabin,
    fontSize: 16,
    fontWeight: 'medium'

  },
  sendbankactt:
  {
    marginTop: 23,
    marginLeft: 10,
    fontFamily: FONTS.cabin,
    fontSize: 10,
    fontWeight: 'bold'

  },

  sendtobankactcontainer:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 21

  },

  amount: {
    fontFamily: FONTS.cabin,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10
  },
  radiobutton:
  {
    width: 20,
    borderWidth: 1,
    height: 20,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  inner: {
    backgroundColor: '#182430',
    width: 10,
    height: 10,
    borderRadius: 10

  },

  sendfunds_container:
  {
    width: 340,
    height: 500,
    marginLeft: 18,
    marginTop: 35,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    alignItems: 'center'

  },

  amountcontainer:
  {
    marginLeft: 50,
    marginRight: 50,
    width: 240,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 12,
    alignItems: 'center',
    borderColor: '#969696'




  }
});
export default SendFunds
