import { View, Text, StyleSheet, Image, Platform } from 'react-native'
import React from 'react';

import { FONTS } from "../constants/theme"
import Colors from "../constants/colors";

const User = ({ userName, avatar }) => {
    return (
        <View style={styles.sectionOne}>
            <View
                style={{
                    paddingVertical: 10,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 10,
                        paddingVertical: 8,
                    }}
                >
                    <View>
                        <Image
                            style={styles.img}
                            source={{ uri: avatar }}
                        />
                    </View>
                    <View
                        style={{
                            paddingVertical: 6,
                        }}
                    >
                        <View>
                            <Text style={styles.sectionOneUsername}>{userName}</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.sectionOneAddToNetwork}>
                                Add to Network
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    sectionOne: {
        width: 150,
        // minWidth: 160,
        height: 100,
        borderRadius: 10,
        backgroundColor: "#E3E3E3",
        marginRight: 20,
    },
    sectionOneUsername: {
        fontFamily: FONTS.cabin,
        fontSize: 10,
        lineHeight: 12,
        alignItems: "center",
        fontWeight: Platform.OS === "ios" ? 500 : 'bold',
    },
    sectionOneAddToNetwork: {
        fontFamily: FONTS.cabin,
        fontSize: 7,
        lineHeight: 9,
        color: "white",
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 100,
        borderColor: '#F6A67B',
        borderWidth: 1,
    },
    card: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.3,
        elevation: 2,
        backgroundColor: "#182430",
        padding: 5,
        borderRadius: 12,
        alignItems: "center",
        marginVertical: 5,
    },
});

export default User;