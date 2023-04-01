import React, { useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

import CustomSearchBar from "./CustomSearchBar";
import Colors from "../constants/colors";
import User from "./User";

const NetworkContacts = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        userName: "@MrsVso",
        name: "Victoria Sunny Owolijah",
        imageUrl: "../assets/myNetwork/david.png",
        commentUrl: "../assets/myNetwork/comment.png",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        userName: "@Ivan_moneyman",
        name: "Ivan Arabone",
        imageUrl: "../assets/myNetwork/david.png",
        commentUrl: "../assets/myNetwork/comment.png",
    },
    {
        id: "5869-bd96-145571e29d72",
        userName: "@Syflex360",
        name: "Onazi Simon",
        imageUrl: "../assets/myNetwork/david.png",
    },
    {
        id: "bd7acbea-c1b1-46c2ad53abb28ba",
        userName: "@DavidShegs",
        name: "David Aremu",
        imageUrl: "../assets/myNetwork/david.png",
        commentUrl: "../assets/myNetwork/comment.png",
    },
    {
        id: "3ac68afc-c605-48d31aa97f63",
        userName: "@LawAttah",
        name: "Lawrence Attah",
        imageUrl: "../assets/myNetwork/david.png",
        commentUrl: "../assets/myNetwork/comment.png",
    },
    {
        id: "71f-bd96-145571e29d72",
        userName: "@Ferdinand",
        name: "Ferdinand Gege",
        imageUrl: "../assets/myNetwork/david.png",
    },
    {
        id: "c1b1-46c2-aed5-3ad53abb28ba",
        userName: "@Lily",
        name: "Lilian",
        imageUrl: "../assets/myNetwork/david.png",
        commentUrl: "../assets/myNetwork/comment.png",
    },
    {
        id: "3ac68afc-48d3-a4f8-fbd91aa97f63",
        userName: "@Dannyadegoke",
        name: "Daniel Adegoke",
        imageUrl: "../assets/myNetwork/david.png",
        commentUrl: "../assets/myNetwork/comment.png",
    },
    {
        id: "58694a0f-471f-bd96-145571e29d72",
        userName: "@MrsVSO",
        name: "Victoria Sunny Owolijah",
        imageUrl: "../assets/myNetwork/david.png",
    },
];

const networks = [
    {
        id: "1",
        userName: "@MrsVso",
        name: "Victoria Sunny Owolijah",
        imageUrl: "https://picsum.photos/200",
    },
    {
        id: "2",
        userName: "@Lily",
        name: "Lilian",
        imageUrl: "https://picsum.photos/200",
    },
    {
        id: "3",
        userName: "@Ojo",
        name: "Mike Ojo",
        imageUrl: "https://picsum.photos/200",
    },
    {
        id: "4",
        userName: "@frank_2478",
        name: "Abdul Frank",
        imageUrl: "https://picsum.photos/200",
    },
    {
        id: "5",
        userName: "@cynthia",
        name: "John cynthia",
        imageUrl: "https://picsum.photos/200",
    },
];

const Contact = ({ userName, name }) => (


    <View style={styles.containerTwo}>
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
            }}
        >
            <View>
                <Image
                    style={styles.img}
                    source={require("../assets/myNetwork/cyflex.png")}
                />
            </View>
            <View
                style={{
                    paddingHorizontal: 7,
                    paddingVertical: 11,
                }}
            >
                <View>
                    <Text style={styles.sectionOneUsername}>{userName}</Text>
                </View>
                <View
                    style={{
                        paddingVertical: 2,
                    }}
                >
                    <Text style={styles.sectionOneUsername}>{name}</Text>
                </View>
            </View>
        </View>
        <View
            style={{
                paddingVertical: 13,
            }}
        >
            <Image
                style={styles.imgComment}
                source={require("../assets/myNetwork/comment.png")}
            />
        </View>
    </View>
);

const MyNetwork = () => {
    // useEffect(() => {
    //   return 'a'

    //   return () => {
    //     second
    //   }
    // }, []);

    return (
        // <TouchableWithoutFeedback onPress={() =>{
        //   Keyboard.dismiss();
        // }}></TouchableWithoutFeedback>
        <View style={styles.screen}>
            {/* Custom SearchBar */}
            <View style={styles.searchbarContainer}>
                <CustomSearchBar style={styles.searchbar}></CustomSearchBar>
            </View>
            {/* Custom SearchBar ends */}

            {/* Invite friends button */}
            <View style={styles.btnContainer}>
                <TouchableHighlight style={styles.inviteFriendsBtn}>
                    <Text style={styles.inviteFriendsBtnTxt}>Invite friends to my Network</Text>
                </TouchableHighlight>
            </View>
            {/* Invite friends button ends */}

            {/* section one */}
            <View style={styles.container}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={networks}
                    renderItem={({ item }) => (
                        <User userName={item.userName} avatar={item.imageUrl} />
                    )}
                    keyExtractor={(item) => item.id}
                />

            </View>

            {/* section two */}
            <View
                style={{
                    paddingTop: 8,
                    flex: 1,
                }}
            >
                {/* section two header */}
                <View
                    style={{
                        paddingVertical: 5,
                    }}
                >
                    <Text style={styles.sectionTwoHeader}>My Network Contacts</Text>
                </View>
                {/* section two header ends */}

                {/* section two listItems */}
                <FlatList
                    data={NetworkContacts}
                    renderItem={({ item }) => (
                        <Contact userName={item.userName} name={item.name} />
                    )}
                    keyExtractor={(item) => item.id}
                />
                {/* section two listItems end */}
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
        backgroundColor: "#FFFFFF",
    },
    header: {
        width: "70%",
        height: 45,
        //marginTop: 15,
        marginVertical: 15,
        marginHorizontal: 60,
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "#182430",
    },
    headerTitle: {
        fontFamily: "Cabin",
        fontSize: 12,
        lineHeight: 15,
        color: "#ffffff",
        paddingVertical: 12,
    },
    container: {
        width: "100%",
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    containerTwo: {
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: 50,
        paddingHorizontal: 12,
        borderWidth: 0.08,
        borderColor: "#000000",
        borderRadius: 1,
        backgroundColor: "rgba(217, 217, 217, 0.1)",
    },
    sectionOne: {
        width: "47%",
        minWidth: 160,
        height: 160,
        borderRadius: 10,
        backgroundColor: "#E3E3E3",
    },
    sectionOneUsername: {
        fontFamily: "Cabin",
        fontSize: 10,
        lineHeight: 12,
        alignItems: "center",
    },
    sectionOneAddToNetwork: {
        fontFamily: "Cabin",
        fontSize: 7,
        lineHeight: 9,
    },
    sectionTwoHeader: {
        fontFamily: "Cabin",
        fontSize: 20,
        lineHeight: 24,
    },
    img: {
        width: 50,
        height: 50,
    },
    imgComment: {
        width: 25,
        height: 25,
    },
    card: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 1,
        elevation: 18,
        backgroundColor: Colors.accent,
        padding: 5,
        borderRadius: 12,
        alignItems: "center",
        marginVertical: 5,
    },
    searchbarContainer: {
        marginHorizontal: 5,
        width: "100%",
    },
    searchbar: {
        backgroundColor: "#D9D9D9",
        borderColor: "#999999",
        borderWidth: 0.1,
        fontSize: 10,
        lineHeight: 12,
        // width: "50%",
    },
    btnContainer: {
        alignItems: "center",
        marginVertical: 10,
    },
    inviteFriendsBtn: {
        width: "65%",
        height: 29,
        backgroundColor: "#182430",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    inviteFriendsBtnTxt: {
        fontFamily: "Cabin",
        fontSize: 12,
        lineHeight: 15,
        color: "#fff",
    },
});

export default MyNetwork;