// import React, { useState, useContext, useEffect } from "react";
// import {
//     View,
//     Text,
//     StyleSheet,
//     Image,
//     Button,
//     TouchableHighlight,
//     TouchableOpacity,
//     ActivityIndicator,
//     FlatList,
//     ScrollView
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// import { AuthContext } from '../context/AuthContext';
// import instance from '../config/ApiManager'

// import MainButton from "./MainButton";
// import ProductListItem from "./ProductListItem";
// import TopDealer from "./TopDealer";
// import Colors from "../constants/colors";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";

// const dealerData = [
//     {
//         id: 1,
//         name: "Dealer1",
//         username: "dealer001",
//         ratings: 4.9
//     },
//     {
//         id: 2,
//         name: "Dealer2",
//         username: "dealer002",
//         ratings: 4.7
//     },
//     {
//         id: 3,
//         name: "Dealer3",
//         username: "dealer003",
//         ratings: 4.0
//     }
// ]

// const Dashboard = () => {
//     const { userData, setUserData } = useContext(AuthContext);
//     const [token, setToken] = useState(null)
//     const [walletData, setWalletData] = useState(null);
//     const [dashboardData, setDashboardData] = useState(null)
//     const { name, email, username, phone, } = userData;

//     const tokes = AsyncStorage.getItem("paylidateToken").then((result) => {
//         if (result !== null) {
//             return result;
//         } else {
//             return 'empty';
//         }
//     }).then((response) => { setToken(JSON.parse(response)) }).catch((error) => console.log(error));

//     const authToken = 'Bearer ' + token;
//     instance.defaults.headers.common["Authorization"] = authToken;

//     const logOut = async () => {
//         AsyncStorage.removeItem('paylidateToken');
//         AsyncStorage.removeItem('paylidateCredentials')
//         instance.get('/api/logout')
//             .then((response) => {
//                 AsyncStorage.removeItem('paylidateCredentials').then(() => {
//                     alert('Log Out Successful');
//                 });
//                 AsyncStorage.removeItem('paylidateToken');
//                 console.log(response)
//             })
//             .catch(error => alert(error));

//     }

//     useEffect(() => {
//         (async () => {
//             await instance.get('/api/dashboard')
//                 .then((response) => {
//                     console.log("worked");
//                     setDashboardData(response.data.data);
//                     console.log({ ...dashboardData })
//                 }).catch((error) => error);
//         })();

//         return () => {
//             console.log(dashboardData);
//             console.log(token);
//         };
//     }, []);


//     // console.log(dashboardData);
//     const { wallet } = { ...dashboardData }

//     var wall = { wallet }

//     // if (wall.length > 0) {
//     //     const { balance, bonus, bank_name, account_number } = { ...wallet[0] };
//     // } else {
//     //     const { balance, bonus, bank_name, account_number } = { wallet };
//     // }

//     const { balance, bonus, bank_name, account_number } = { ...wallet };



//     const navigation = useNavigation();

//     const checkMyNetwork = async () => {
//         navigation.navigate("MyNetworkScreen");
//     };

//     const checkUserProfile = async () => {
//         navigation.navigate("UserProfileScreen");
//     };

//     const checkMyCommunity = async () => {
//         navigation.navigate("MyCommunityScreen");
//     };

//     const checkAddCards = async () => {
//         navigation.navigate("AddCardScreen");
//     };

//     const checkActiveCards = async () => {
//         navigation.navigate("ActiveCardScreen");
//     };

//     const myDeals = async () => {
//         navigation.navigate("MyDeals");
//     };

//     const sendfunds_navigation = async () => {
//         navigation.navigate("SendFunds");
//     };

//     const paybills_navigation = async () => {
//         navigation.navigate("PayBills");
//     };

//     return (
//         <>
//             {dashboardData ?
//                 <ScrollView>
//                     <View style={styles.screen}>
//                         <View style={styles.textContainer}>
//                             <Text>Hello, {name}</Text>
//                         </View>

//                         <View style={styles.sectionOne}>
//                             <View style={styles.flexStyle}>
//                                 <Text style={styles.bigText}>N {balance ? balance : "0"}</Text>
//                                 {/* Fund Wallet button */}
//                                 <View >
//                                     <TouchableHighlight
//                                         style={styles.smallBtn}
//                                         onPress={logOut}
//                                     >
//                                         <Text style={styles.smallBtnTxt}>Fund Wallet</Text>
//                                     </TouchableHighlight>
//                                 </View>
//                                 {/* Fund button ends */}
//                             </View>
//                             <View style={styles.flexStyle}>
//                                 <View>
//                                     <Text style={styles.mediumText}>{username ? `@${username}` : 'Username'}</Text>
//                                 </View>
//                                 <View>
//                                     <Text style={styles.mediumText}>{account_number ? account_number : "7123467390"}</Text>
//                                     <Text style={styles.smallText}>{bank_name ? bank_name : "Sterling Bank"}</Text>
//                                 </View>
//                             </View>
//                             {/* Send funds button */}
//                             <View style={styles.btnContainer}>
//                                 <TouchableHighlight
//                                     style={styles.sendFundsBtn}
//                                     onPress={sendfunds_navigation}
//                                 >
//                                     <Text style={styles.sendFundsBtnTxt}>Send Funds</Text>
//                                 </TouchableHighlight>
//                             </View>
//                             {/* Send funds button ends */}
//                         </View>

//                         {/* Section Two  */}
//                         <View style={styles.sectionTwo}>
//                             <View style={styles.flexStyle2}>
//                                 <View style={styles.sectionTwoSub}>
//                                     <Image
//                                         style={styles.imgStyleSec2}
//                                         source={require("../assets/dashboard/trophy.png")}
//                                     />
//                                     <Text style={styles.smallTextSecTwo}>0 PPTs</Text>
//                                 </View>
//                                 <View style={styles.sectionTwoSub}>
//                                     <Image
//                                         style={styles.imgStyleSec2}
//                                         source={require("../assets/dashboard/trophy2.png")}
//                                     />
//                                     <Text style={styles.smallTextSecTwo}>N {bonus ? bonus : '0'}</Text>
//                                 </View>
//                             </View>
//                         </View>
//                         {/* Section Two ends */}

//                         <View>
//                             <View style={styles.sectionThree}>
//                                 <View>
//                                     <TouchableHighlight onPress={checkActiveCards}>
//                                         <Image
//                                             style={[styles.imageStyle2, styles.imgPositionLeft]}
//                                             source={require("../assets/dashboard/users.png")}
//                                         />
//                                     </TouchableHighlight>
//                                     <Text style={styles.miniText}>Community Feed</Text>
//                                 </View>
//                                 <View>
//                                     <TouchableHighlight onPress={myDeals}>
//                                         <Image
//                                             style={[styles.imageStyle2, styles.imgPositionRight]}
//                                             source={require("../assets/dashboard/handshake.png")}
//                                         />
//                                     </TouchableHighlight>
//                                     <Text style={[styles.miniText, styles.imgPositionRight]}>
//                                         My Deals
//                                     </Text>
//                                 </View>
//                                 <View>
//                                     <Image
//                                         style={[styles.imageStyle, styles.imgPositionLeft]}
//                                         source={require("../assets/dashboard/verified.png")}
//                                     />
//                                     <Text style={styles.miniText}>Fulfillment</Text>
//                                 </View>
//                             </View>
//                             <View style={styles.sectionThree}>
//                                 <View>
//                                     <TouchableOpacity onPress={checkMyNetwork}>
//                                         <Image
//                                             style={[styles.imageStyle, styles.imgPositionLeft]}
//                                             source={require("../assets/dashboard/node.png")}
//                                         />
//                                     </TouchableOpacity>
//                                     <Text style={styles.miniText}>My Network</Text>
//                                 </View>

//                                 <View>
//                                     <TouchableOpacity onPress={checkUserProfile}>
//                                         <Image
//                                             style={[styles.imageStyle2, styles.imgPositionLeft]}
//                                             source={require("../assets/dashboard/payment_wallet.png")}
//                                         />
//                                         <Text style={[styles.miniText, styles.imgPositionRight]}>
//                                             Payment Requests
//                                         </Text>
//                                     </TouchableOpacity>
//                                 </View>

//                                 <View>
//                                     <TouchableOpacity onPress={paybills_navigation}>
//                                         <TouchableHighlight onPress={checkAddCards}>
//                                             <Image
//                                                 style={styles.imageStyle}
//                                                 source={require("../assets/dashboard/payment.png")}
//                                             />
//                                         </TouchableHighlight>
//                                         <Text style={styles.miniText}>Pay Bills</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
//                             {/* section three ends */}




//                             {/* Post to Community button */}
//                             <View style={styles.btnContainer}>
//                                 <TouchableHighlight
//                                     onPress={checkMyCommunity}
//                                     style={styles.postCommunityBtn}
//                                 >
//                                     <Text style={styles.postCommunityBtnTxt}>Post to Community</Text>
//                                 </TouchableHighlight>
//                             </View>
//                             {/* Post to Community button ends */}
//                         </View>

//                         {/* Top Sellers section */}
//                         <View style={{ flexDirection: "row" }}>
//                             <FlatList
//                                 horizontal
//                                 pagingEnabled={true}
//                                 showsHorizontalScrollIndicator={false}
//                                 legacyImplementation={false}
//                                 data={dealerData}
//                                 renderItem={({ item }) => (<TopDealer userName={item.username} name={item.name} ratings={item.ratings} />)}
//                                 keyExtractor={(item) => item.id}
//                             // style={{ width: SCREEN_WIDTH + 5, height: '100%' }}
//                             />
//                         </View>
//                         {/* Top Sellers section end */}

//                         {/* product list section */}
//                         <View style={styles.listSection}>
//                             <ProductListItem />
//                         </View>
//                         {/* product list section end */}
//                     </View>
//                 </ScrollView>
//                 : <ActivityIndicator size="large" color="#EB6117" />}
//         </>
//     );
// };

// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         padding: 35,
//         width: "100%",
//         height: "100%",
//         backgroundColor: "#FFFFFF",
//     },
//     textContainer: {
//         padding: 10,
//     },
//     sectionOne: {
//         width: "100%",
//         height: 133,
//         paddingTop: 15,
//         borderRadius: 8,
//         backgroundColor: "#F6A67B",
//     },
//     sectionTwo: {
//         width: "100%",
//         height: 66,
//         marginVertical: 20,
//         borderRadius: 8,
//         backgroundColor: "#489451",
//     },
//     sectionTwoSub: {
//         width: 60,
//         height: 49,
//         alignItems: "center",
//         borderRadius: 8,
//         backgroundColor: "#88C58F",
//     },
//     flexStyle: {
//         flexDirection: "row",
//         width: "90%",
//         marginHorizontal: 15,
//         paddingTop: 3,
//         paddingBottom: 4,
//         justifyContent: "space-between",
//     },
//     flexStyle2: {
//         flexDirection: "row",
//         width: "90%",
//         marginHorizontal: 15,
//         paddingTop: 10,
//         paddingBottom: 10,
//         justifyContent: "space-around",
//     },
//     sectionThree: {
//         flexDirection: "row",
//         width: "90%",
//         marginHorizontal: 15,
//         paddingTop: 10,
//         paddingBottom: 10,
//         justifyContent: "space-between",
//     },
//     listSection: {
//         width: "100%",
//         height: 800,
//         borderTopWidth: 0.3,
//         borderBottomWidth: 0.3,
//         marginVertical: 20,
//         borderColor: Colors.primary,
//         alignItem: "center",
//     },

//     bigText: {
//         fontSize: 24,
//         fontWeight: "bold",
//         color: "#000000",
//     },
//     mediumText: {
//         fontSize: 12,
//         lineHeight: 15,
//         fontWeight: "normal",
//     },
//     smallText: {
//         fontSize: 10,
//         fontWeight: "normal",
//         lineHeight: 12,
//         color: "#ffffff",
//         textAlign: "center",
//     },
//     smallTextSecTwo: {
//         fontSize: 12,
//         fontWeight: "normal",
//         lineHeight: 15,
//         color: "#ffffff",
//         textAlign: "center",
//     },
//     miniText: {
//         fontSize: 10,
//         fontWeight: "bold",
//         lineHeight: 12,
//         color: "#000000",
//         textAlign: "center",
//         paddingTop: 8,
//     },

//     btnContainer: {
//         alignItems: "center",
//         // marginVertical: 10,
//     },
//     sendFundsBtn: {
//         width: "90%",
//         height: 25,
//         backgroundColor: "#D9D9D9",
//         borderRadius: 8,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     sendFundsBtnTxt: {
//         fontFamily: "Cabin",
//         fontWeight: 'bold',
//         fontSize: 16,
//         lineHeight: 19,
//         color: "#000",
//     },
//     postCommunityBtn: {
//         width: "90%",
//         height: 30,
//         backgroundColor: "#EB6117",
//         borderRadius: 7,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     postCommunityBtnTxt: {
//         fontFamily: "Cabin",
//         fontWeight: 'bold',
//         fontSize: 16,
//         lineHeight: 19,
//         color: "#fff",
//     },
//     smallBtn: {
//         width: "100%",
//         height: 28,
//         backgroundColor: "#D9D9D9",
//         borderRadius: 8,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     smallBtnTxt: {
//         fontFamily: "Cabin",
//         fontWeight: 'bold',
//         fontSize: 14,
//         lineHeight: 17,
//         color: "#000",
//         paddingHorizontal: 3,
//     },
//     imageStyle: {
//         width: 37,
//         height: 37,
//     },
//     imageStyle2: {
//         maxWidth: 55,
//         maxHeight: 37,
//     },
//     imgStyleSec2: {
//         width: 20.33,
//         height: 18.11,
//         marginVertical: 4,
//     },
//     imgPositionRight: {
//         marginRight: 33,
//     },
//     imgPositionLeft: {
//         marginLeft: 10,
//     },
//     microImg: {
//         height: 10,
//         width: 8,
//         marginTop: 13,
//         marginBottom: 7,
//         marginLeft: 6,
//     },
//     microImgTruck: {
//         height: 7,
//         width: 10,
//         marginTop: 15,
//         marginBottom: 7,
//     },
// });

// export default Dashboard;
