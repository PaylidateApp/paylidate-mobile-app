import { StyleSheet, Text, View, Image, SafeAreaView, Platform } from 'react-native'
import React from 'react'

const MyDeals = () => {
    return (
        <SafeAreaView>
            <View style={styles.myHeader}>
                <Text style={styles.header}>My Deals</Text>
            </View>
            <View style={styles.container} >

                <View style={styles.imageCon}>
                    <Image style={styles.image} source={require('../assets/pic1.png')} />
                    <View style={styles.tst}>
                        <Text style={styles.nme}>@Jiji_manager paid you</Text>
                        <Text style={styles.usename}>Transfer</Text>
                    </View>
                    <View style={styles.tst1}>
                        <Text style={styles.nme}>N 685,000</Text>
                        <Text style={styles.usename}>Completed</Text>
                    </View>
                </View>
                <View style={styles.imageCon}>
                    <Image style={styles.image} source={require('../assets/pic2.png')} />
                    <View style={styles.tst}>
                        <Text style={styles.nme}>You paid @Ivan_moneyman</Text>
                        <Text style={styles.usename}>Escrow</Text>
                    </View>
                    <View style={styles.tst1}>
                        <Text style={styles.nme}>N 65,000</Text>
                        <Text style={styles.usename}>Completed</Text>
                    </View>
                </View>
                <View style={styles.imageCon}>
                    <Image style={styles.image} source={require('../assets/pic3.png')} />
                    <View style={styles.tst}>
                        <Text style={styles.nme}>@MrsVSO paid you</Text>
                        <Text style={styles.usename}>Escrow</Text>
                    </View>
                    <View style={styles.tst1}>
                        <Text style={styles.nme}>N 405,000</Text>
                        <Text style={styles.usename}>Completed</Text>
                    </View>
                </View>
                <View style={styles.imageCon}>
                    <Image style={styles.image} source={require('../assets/pic1.png')} />
                    <View style={styles.tst}>
                        <Text style={styles.nme}>You paid @Syflex360</Text>
                        <Text style={styles.usename}>Escrow</Text>
                    </View>
                    <View style={styles.tst1}>
                        <Text style={styles.nme}>N 15,000</Text>
                        <Text style={styles.usename}>Completed</Text>
                    </View>
                </View>
                <View style={styles.imageCon}>
                    <Image style={styles.image} source={require('../assets/pic2.png')} />
                    <View style={styles.tst}>
                        <Text style={styles.nme}>@DavidShegs paid you</Text>
                        <Text style={styles.usename}>Escrow</Text>
                    </View>
                    <View style={styles.tst1}>
                        <Text style={styles.nme}>N 115,000</Text>
                        <Text style={styles.usename}>Completed</Text>
                    </View>
                </View>
                <View style={styles.imageCon}>
                    <Image style={styles.image} source={require('../assets/pic3.png')} />
                    <View style={styles.tst}>
                        <Text style={styles.nme}>@Danyadegoke paid you </Text>
                        <Text style={styles.usename}>Escrow</Text>
                    </View>
                    <View style={styles.tst1}>
                        <Text style={styles.nme}>N 45,000</Text>
                        <Text style={styles.usename}>Completed</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MyDeals;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    myHeader: {
        justifyContent: 'left',
        justifyItems: 'left',
        alignItems: 'left',
        paddingHorizontal: 20,
    },

    header: {
        fontWeight: Platform.OS === 'ios' ? 700 : 'bold',
        fontSize: 20,
    },

    imageCon: {
        flexDirection: 'row',
        backgroundColor: '#D9D9D9',
        marginTop: 20,
        // marginLeft: 24,
        width: 315,
        height: 70,
        borderRadius: 8,
        paddingHorizontal: 9,
        paddingVertical: 9,
    },

    image: {
        // marginLeft: 9,
    },

    tst: {
        marginTop: 7,
        marginLeft: 7,
    },

    nme: {
        fontSize: 10,
        // fontFamily: 'FONTS.cabin',
        fontweight: 500,
        lineHeight: 14,
    },

    usename: {
        fontSize: 10,
        fontweight: 500,
    },

    tst1: {
        marginTop: 7,
        marginLeft: 70,
    },
})