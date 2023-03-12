import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, Pressable, ActivityIndicator, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Logo from './Logo';

import { useNavigation } from "@react-navigation/native";
import FontAwesome from '@expo/vector-icons/FontAwesome'


const ResetInput = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");

    const navigation = useNavigation();

    const signup_navigation = async () => {
        navigation.navigate("SignUp");

    };

    const login_navigation = async () => {
        navigation.navigate("Login");

    };
    return (
        <View style={styles.InputGroup}>
            <View>
                <Logo style={styles.lgn} />
            </View>
            <View style={styles.container}>
                <View style={styles.InputContainer}>
                    <View style={styles.icon}>
                        <FontAwesome name="envelope" size={17} color="#000" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder="Enter You Email"
                        placeholderTextColor={"#848484"}
                        onChangeText={text => setEmail(text)}
                        value={email}
                    />
                </View>
            </View>

            <View>
                <View style={styles.btncontainer}>
                    <Pressable style={styles.resetbtn}>
                        {loading ? <ActivityIndicator /> : <Text style={styles.resetbtnlabel}>Reset Password</Text>}
                    </Pressable>
                </View>


                <View style={styles.nxt}>
                    <Pressable style={styles.flex} onPress={signup_navigation}>
                        <Text style={styles.acc}>Don't have an account? </Text>
                        <Text style={styles.login}>SignUp</Text>
                    </Pressable>
                    <Pressable onPress={login_navigation}>
                        <Text style={styles.acc}>     Back to Login</Text>
                    </Pressable>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.ft}>Buyers Protection| Sellers Verificaton| Transaction Security</Text>

                </View>
            </View>
        </View>

    )
}

export default ResetInput

const styles = StyleSheet.create({
    InputGroup: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#D9D9D9",
        height: "100%",
        backgroundColor: '#EB6117',
    },

    InputContainer: {
        flexDirection: "row",
        borderRadius: 12,
        padding: 7,
    },

    icon: {
        padding: 9,
        backgroundColor: "#C5C5C5",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,

    },

    Input: {
        padding: 7,
        fontSize: 14,
        backgroundColor: "#D9D9D9",
        width: 260,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    },
    container: {

    },

    siContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 32,
    },

    btncontainer:
    {
        alignItems: "center",
        marginTop: 46,
    },
    resetbtn:
    {
        width: 250,
        height: 40,
        backgroundColor: "#182430",
        shadowColor: "black",
        shadowOffset: { width: 3, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 4,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },

    resetbtnlabel:
    {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",

    },

    signUp: {
        fontSize: 14,
        backgroundColor: "#182430",
        color: "#FFFFFF",
        paddingVertical: 12,
        paddingHorizontal: 70,
        borderRadius: 20,
    },

    nxt: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 70,

    },

    flex: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

    },

    acc: {
        fontSize: 12,
        color: "#FFFFFF",
    },

    login: {
        fontSize: 12,
        color: "#FFFFFF",
    },

    footer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,

    },

    ft: {
        fontSize: 10,
        color: "#FFFFFF",
    },


})