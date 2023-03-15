/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, SafeAreaView, TouchableHighlight, Platform, Pressable, ActivityIndicator } from "react-native";

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Logo from "./Logo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import instance from "../../../config/ApiManager";


const SignUp = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSignUp = async () => {
        try {
            //check if all input are empty
            if (email === "" || password === "" || confirmPassword === "" || phone === "" || name === "") {
                alert("Please fill all fields");
                return;
            } else {
                if (password !== confirmPassword) {
                    alert("Passwords do not match");
                    return;
                } else {
                    setLoading(true);
                    const data = {
                        email: email,
                        password: password,
                        password_confirmation: confirmPassword,
                        phone: phone,
                        name: name,
                    };
                    const response = await instance.post("/api/signup", data);
                    if (response.status === 200) {
                        alert("Sign Up Successful");
                        setLoading(false);
                        navigation.navigate("Login");
                    } else {
                        alert("Sign Up Failed");
                        setLoading(false);
                    }
                }
            }
        } catch (error) {
            setLoading(false);
            alert(error);
        }
    };

    const login_navigation = async () => {
        navigation.navigate("Login");

    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
            <SafeAreaView style={styles.InputGroup}>
                <View>
                    <Logo />
                </View>

                <View style={styles.container}>
                    <View style={styles.InputContainer}>
                        <View style={styles.icon} >
                            <FontAwesome name="id-card-o" size={17} color="#000" />
                        </View>
                        <TextInput
                            style={styles.Input}
                            placeholder="Your Full Name"
                            value={name}
                            onChangeText={text => setName(text)}
                        />
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.InputContainer}>
                        <View style={styles.icon}>
                            <FontAwesome name="phone" size={17} color="#000" />
                        </View>
                        <TextInput
                            style={styles.Input}
                            placeholder="Enter Your Phone Number"
                            value={phone}
                            onChangeText={text => setPhone(text)}
                        />
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.InputContainer}>
                        <View style={styles.icon}>
                            <FontAwesome name="envelope" size={17} color="#000" />
                        </View>
                        <TextInput
                            style={styles.Input}
                            placeholder="Enter You Email"
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.InputContainer}>
                        <View style={styles.icon}>
                            <FontAwesome name="lock" size={17} color="#000" />
                        </View>
                        <TextInput
                            style={styles.Input}
                            placeholder="Create Your Password"
                            value={password}
                            onChangeText={text => setPassword(text)}
                        />
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.InputContainer}>
                        <View style={styles.icon} >
                            <FontAwesome name="lock" size={18} color="#000" />
                        </View>
                        <TextInput
                            style={styles.Input}
                            placeholder="Confirm Your Passsword"
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={text => setConfirmPassword(text)}

                        />
                    </View>
                </View>

                <View>
                    <View style={styles.signContainer}>
                        <TouchableHighlight style={styles.signupbtn} onPress={handleSignUp} >
                            {loading ? <ActivityIndicator /> : <Text style={styles.signUp}>SignUp</Text>}
                        </TouchableHighlight>
                    </View>

                    <Pressable onPress={login_navigation}>
                        <View style={styles.nxt}>
                            <Text style={styles.acc}>Already have an account? </Text>
                            <Text style={styles.login}>Log in</Text>
                        </View>
                    </Pressable>

                    <View style={styles.footer}>
                        <Text style={styles.ft}>Buyers Protection| Sellers Verificaton| Transaction Security</Text>

                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default SignUp;


const styles = StyleSheet.create({
    InputGroup: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#D9D9D9",
        height: "100%",
        backgroundColor: "#EB6117",

        // backgroundColor: "red",
        // paddingTop:200,
    },

    InputContainer: {
        flexDirection: "row",
        borderRadius: 12,
        padding: 7,
    },

    icon: {
        padding: 9,
        backgroundColor: "#C5C5C5",
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        justifyContent: "center",
        alignItems: "center",

    },

    Input: {
        padding: 5,
        backgroundColor: "#D9D9D9",
        width: 260,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    },
    container: {

    },

    signContainer: {
        alignItems: "center",
        marginTop: 46,
    },

    signupbtn: {
        borderRadius: 25,
        width: 190,
        height: 37,
        backgroundColor: "#182430",
        shadowColor: "black",
        shadowOffset: { width: 3, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 4,
        justifyContent: "center",
        alignItems: "center",
    },

    signUp: {
        fontSize: 14,
        color: "#FFFFFF",
    },

    nxt: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
    },

    acc: {
        fontSize: 12,
        // fontFamily: FONTS.cabin,
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
        marginTop: 40,

    },

    ft: {
        fontSize: 10,
        color: "#FFFFFF",
    },
});






