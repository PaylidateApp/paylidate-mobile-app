import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View style={styles.container}>
        <View style={styles.messageContainer}>
            <View style={styles.messageView}>
                <Text style={styles.username}>@Lilian444</Text>
                <Text style={styles.time}>12:24pm</Text>
            </View>
            <View style={styles.seeMessage}>
                <Text style={styles.message}>Nike Sneakers - Blue Sleek</Text>
                <View style={styles.emage}>
                    <Image style={styles.image} source={require('../../assets/Sneakers.png')} />
                </View>
                    <View style={styles.list}>
                        <View style={styles.viewList}>
                            <Text style={styles.quantity}>Quantity</Text>
                            <Text style={styles.num}>3</Text>
                        </View>

                        <View style={styles.viewList1}>
                            <Text style={styles.total}>Total</Text>
                            <Text style={styles.num1}>N37,500</Text>
                        </View>

                        <View style={styles.viewList2}>
                            <Text style={styles.delivery}>Delivery</Text>
                            <Text style={styles.num2}>Abuja</Text>
                        </View>

                        <View style={styles.viewList3}>
                            <Text style={styles.others}>Other info</Text>

                        </View>
                        <View style={styles.viewList4}>
                            <Text style={styles.infos}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  </Text>

                        </View>
                    </View>

            </View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: 250,
        // height: 200,
        alignSelf: 'flex-end',
    },

    messageContainer:{
        // backgroundColor: '#FFFFFF',
        // alignSelf: 'flex-end',
        padding: 10,
        // borderRadius: 35,
        paddingHorizontal: 10,
    },

    messageView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#D9D9D9',
        padding: 3,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,


    },

    username: {
        fontSize: 10,
    },

    time: {
        fontSize: 10,
    },

    message: {
        fontSize: 18,
        // justifyContent: 'center',
        alignSelf:'center',
        // fontWeight: bold,
    },


    seeMessage:{
        backgroundColor: '#FFFFFF',
        padding: 5,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },

    emage: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        margin: 5,
        justifyContent: 'center',
    height: 80,
    width: 80,
    },

    list: {
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        // lineHeight: 12,
        
    },

    viewList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 3,
    }, 

    quantity: {
        backgroundColor: '#D9D9D9',
        padding: 1,
        fontSize: 11,
        width:80,
        marginLeft:25,
        textAlign: 'center',

    },

    num: {
        backgroundColor: '#D9D9D9',
        padding: 1,
        fontSize: 11,
        width:80,
        marginRight:25,
        textAlign: 'center',

    },

    viewList1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 3,
    },

    total: {
        backgroundColor: '#D9D9D9',
        padding: 1,
        fontSize: 11,
        width:80,
        marginLeft:25,
        textAlign: 'center',

    },

    num1: {
        backgroundColor: '#D9D9D9',
        padding: 1,
        fontSize: 11,
        width:80,
        marginRight:25,
        textAlign: 'center',

    },


    viewList2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 3,
    },

    delivery: {
        backgroundColor: '#D9D9D9',
        padding: 1,
        fontSize: 11,
        paddingRight: 7,
        width:80,
        marginLeft:25,
        textAlign: 'center',
    },

    num2: {
        backgroundColor: '#D9D9D9',
        padding: 1,
        fontSize: 11,
        width:80,
        marginRight:25,
        textAlign: 'center',

    },

    viewList3: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 3,
    },

    others: {
        backgroundColor: '#D9D9D9',
        padding: 1,
        fontSize: 11,
        width:165,
        textAlign: 'center',

    },

    viewList4: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 3,
    },

    infos: {
        backgroundColor: '#D9D9D9',
        padding: 1,
        fontSize: 11,
        width:165,
        textAlign: 'center',

    },
})