import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';

export const Product = ({ userName, productName, amount, location, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.listItemStyles}>
            <View style={styles.listItemsPicContainer}>
                <Image
                    style={styles.listItemsPic}
                    source={require("../assets/dashboard/camera.png")}
                />
            </View>
            <View style={styles}>
                <View style={styles.listItemsTxtContainer}>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <Text style={[styles.miniText, styles.miniTextPosition2]}>
                            {userName}
                        </Text>

                        <Image
                            style={styles.miniImg}
                            source={require("../assets/dashboard/verify_primary.png")}
                        />
                    </View>
                    <View>
                        <Text style={styles.smallTextDark}>{productName}</Text>
                    </View>
                </View>
                <View style={styles.listItemsTxtContainer}>
                    <View>
                        <Text style={[styles.smallTextDark, styles.smallTextDarkPosition]}>
                            {amount}.00
                        </Text>
                    </View>
                </View>
                <View style={styles.listItemsTxtContainer}>
                    <View style={styles.listItemsTxt}>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <Image
                                style={styles.microImg}
                                source={require("../assets/dashboard/location.png")}
                            />
                            <Text style={styles.microText}>{location}</Text>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <Image
                                style={styles.microImgTruck}
                                source={require("../assets/dashboard/truck.png")}
                            />
                            <Text style={styles.microText}>Nigeria Wide</Text>
                        </View>
                    </View>
                </View>
                <View style={styles}>
                    <View style={styles.listItemsTxt}>
                        <View>
                            <Image
                                style={styles.commentImg}
                                source={require("../assets/dashboard/comment.png")}
                            />
                        </View>
                        <View style={styles.listItemsTxt}>
                            <Text style={[styles.miniText, styles.miniTextPosition]}>10</Text>
                            <Image
                                style={styles.likeImg}
                                source={require("../assets/dashboard/like.png")}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </TouchableOpacity>
);



const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    listItemStyles: {
        flexDirection: "row",
        width: "95%",
        height: 160,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: "#F6F6F6",
        borderColor: "#dddddd",
    },
    listItemsPicContainer: {
        width: "45%",
        height: 159,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        borderWidth: 0.8,
        // borderLeftWidth: 1.8,
        // borderRightWidth: 1.8,
        borderColor: "#000000",
    },
    listItemsPic: {
        width: "100%",
        height: 158,
    },
    listItemsTxtContainer: {
        width: "95%",
        borderBottomWidth: 1,
        //borderRadius: 12,
        borderColor: "#dddddd",
    },
    miniText: {
        fontSize: 8,
        fontWeight: "normal",
        lineHeight: 10,
        color: "#000000",
        textAlign: "center",
        paddingTop: 8,
    },
    miniTextPosition: {
        textAlign: "left",
        paddingHorizontal: 5,
        paddingTop: 15,
    },
    miniTextPosition2: {
        textAlign: "left",
        paddingHorizontal: 25,
        paddingTop: 15,
    },
    microText: {
        fontSize: 6,
        fontWeight: "normal",
        lineHeight: 7,
        textAlign: "left",
        paddingHorizontal: 5,
        paddingTop: 15,
    },
    miniImg: {
        height: 13,
        width: 13,
        marginTop: 12,
    },
    smallTextDark: {
        fontSize: 10,
        fontWeight: "normal",
        lineHeight: 12,
        textAlign: "left",
        paddingHorizontal: 25,
        paddingVertical: 8,
    },
    smallTextDarkPosition: {
        paddingVertical: 7,
    },
    listItemsTxt: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    likeImg: {
        width: 15,
        height: 13,
        marginTop: 11,
        marginBottom: 5,
        marginHorizontal: 2,
    },
    microImg: {
        height: 10,
        width: 8,
        marginTop: 13,
        marginBottom: 7,
        marginLeft: 6,
    },
    microImgTruck: {
        height: 7,
        width: 10,
        marginTop: 15,
        marginBottom: 7,
    },
    commentImg: {
        width: 12.5,
        height: 12.5,
        marginTop: 11,
        marginBottom: 5,
        marginRight: 12,
    },
});