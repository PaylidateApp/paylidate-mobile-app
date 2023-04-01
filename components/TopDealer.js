import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { FONTS } from "../constants/theme";
import colors from '../constants/colors';

const TopDealer = ({ userName, name, ratings, deals, avatar }) => (

    <View
        style={{
            borderColor: '#F6A67B',
            borderWidth: 0.5,
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            flexDirection: "column",
            width: 300,
            height: 200,
            backgroundColor: "#F6F6F6",
            marginHorizontal: 15,
            justifyContent: "space-evenly",
            borderRadius: 25,
            paddingHorizontal: 15,
            paddingVertical: 15,
            marginTop: 20,
            marginBottom: 20,
            shadowColor: "#000",
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 4,
            gap: 1,
        }}
    >
        <View
            style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <View>
                <View>
                    <Image
                        style={styles.sellerImage}
                        source={{ uri: avatar }}
                    />
                </View>

            </View>
            <View style={{ flex: 1, flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                <View
                    style={{
                        paddingHorizontal: 7,
                        paddingVertical: 11,
                    }}
                >
                    <View>
                        <Text style={styles.sellerText}>@{userName}</Text>
                    </View>
                    <View>
                        <Text style={styles.sellerText}>{name}</Text>
                    </View>
                </View>

            </View>
        </View>
        <View style={{ flexDirection: "row" }}>
            <Text style={styles.ratingsText}>{ratings}</Text>
            <AntDesign name="star" size={24} color="#182430" />
        </View>
        <View>
            <Text style={styles.dealsText}>Deals complete: 1000</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    sellerText: {
        textTransform: "capitalize",
        fontFamily: FONTS.cabin,
        fontSize: 25,
    },
    ratingsText: {
        fontFamily: FONTS.cabin,
        fontSize: 30,
        fontWeight: Platform.OS === "ios" ? 700 : "bold",
    },
    dealsText: {
        fontFamily: FONTS.cabin,
        fontSize: 17,
        fontWeight: Platform.OS === "ios" ? 700 : "bold",
    },
    sellerImage: {
        borderColor: '#F6A67B',
        borderWidth: 1,
        borderRadius: 20,
        height: 100,
        width: 100,
    }
});
export default TopDealer;