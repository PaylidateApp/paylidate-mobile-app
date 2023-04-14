import { StyleSheet, Text, View, Image, SafeAreaView, Platform, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FONTS } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';
import instance from '../config/ApiManager';
import { AuthContext } from '../context/AuthContext';
import colors from '../constants/colors';
import { dummyTransaction, dummyUsers } from '../constants/dummyTransaction';


const status = (status) => {
    if (status == 0) {
        return "Pending"
    } else if (status == 1) {
        return "Completed"
    } else {
        return "Failed"
    }
}

const getUser = (id) => {
    // TODO: get user from users list using passed id
    const user = dummyUsers.find(user => user.id === id);
    return user.name;
}

const MyDeals = () => {
    const navigation = useNavigation();

    const { userData, setUserData } = useContext(AuthContext);

    const { id, name } = userData

    const [transactions, setTransactions] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchTransaction = async () => {
            console.log("Transaction useEffect() fired");
            setIsLoading(true);

            try {
                const response = await instance.get('/api/transaction');
                if (response.data.status === 'success') {
                    setTransactions(dummyTransaction);
                    // console.log(response.data);
                    // console.log(transactions)
                }

            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTransaction();

    }, []);


    return (
        <SafeAreaView>
            <View style={styles.myHeader}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons name="chevron-back" size={20} color="black" />
                    <Text style={styles.header}>Home</Text>
                </TouchableOpacity>
                <Text style={styles.header}>My Deals</Text>
            </View>
            {
                isLoading ? (
                    <ActivityIndicator size="large" color="#EB6117" style={{ justifyContent: "center", alignItems: "center", marginTop: "100%" }} />
                ) : transactions.length == 0 ? (
                    <>
                        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: "100%" }} >
                            <Text style={{ fontSize: 20, fontWeight: "bold", color: colors.primary }}>You currently dont't have any transaction</Text>
                        </View>
                    </>
                ) : (
                    <>
                        <View style={styles.container} >
                            <FlatList
                                horizontal={false}
                                pagingEnabled={false}
                                showsVerticalScrollIndicator={false}
                                legacyImplementation={false}
                                data={transactions}
                                renderItem={({ item }) => (
                                    // <TopDealer avatar={item.avatar} userName={item.username} name={item.name} ratings={item.ratings} />
                                    <View style={styles.imageCon}>
                                        <View style={{ gap: 8, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                            <Image style={styles.image} source={require('../assets/pic1.png')} />
                                            <View style={styles.tst}>
                                                {item.product.user_id == id ?
                                                    (
                                                        <>
                                                            <Text style={styles.name}>{item.secondary_user.name} paid you</Text>
                                                            <Text style={styles.username}>Escrow</Text>
                                                        </>
                                                    ) :
                                                    (
                                                        <>
                                                            <Text style={styles.name}>you paid {getUser(item.user_id)}</Text>
                                                            <Text style={styles.username}>Escrow</Text>
                                                        </>
                                                    )

                                                }
                                            </View>
                                        </View>
                                        <View style={styles.tst1}>
                                            <Text style={styles.name}>{item.amount}</Text>
                                            <Text style={styles.username}>{status(item.status)}</Text>
                                        </View>
                                    </View>
                                )}
                                keyExtractor={(item) => item.id}
                            />



                        </View>
                    </>
                )
            }

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
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
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
        width: 315,
        height: 70,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    image: {
        // marginLeft: 9,
    },

    name: {
        fontSize: 15,
        fontFamily: FONTS.cabin,
        fontWeight: Platform.OS === 'ios' ? 500 : "medium",
    },

    username: {
        fontSize: 15,
        fontFamily: FONTS.cabin,
        fontWeight: Platform.OS === 'ios' ? 500 : "medium",
    },
})