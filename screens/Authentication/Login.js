/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */

import { StyleSheet, View, Text, Image, TextInput, TouchableHighlight, Platform, Pressable, SafeAreaView, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import * as React from "react";
import { FONTS } from "../../constants/theme";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import instance from "../../config/ApiManager";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {

  const navigation = useNavigation();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState("");
  // const [email_error, setEmailError] = React.useState("");
  // const [password_error, setPasswordError] = React.useState("");
  // const [email_valid, setEmailValid] = React.useState(false);
  // const [password_valid, setPasswordValid] = React.useState(false);

  const [userData, setUserData] = React.useState(null);
  const { signIn } = React.useContext(AuthContext)

  const checklogin = async () => {
    console.log("clicked before_try");
    try {
      if (email.length === 0 || password.length === 0) {
        alert("Please enter fill in your email and password");
      } else {
        // regex email validation rules
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email) === false) {
          alert(email + " is not a valid email address.");
        } else {
          setLoading(true);
          const result = instance.post("/api/login", { email: email, password: password }).then((response) => {
            if (response.data.statusText !== "success" || response.data.status === 500) {
              alert("Sorry an error occured please try again");
              setLoading(false);
            }
            else {
              AsyncStorage.setItem("AccessToken", response.data.token);
              setUserData(response.data);
              navigation.navigate("DashboardScreen");
              setLoading(false);
              signIn();
            }
          }).catch((error) => {
            alert(error.response.data.message);
            setLoading(false);
          });
        }
      }

    } catch (error) {
      return error.message;
    }

  };

  const signup_navigation = async () => {
    navigation.navigate("SignUp");

  };

  const reset_password_navigation = async () => {
    navigation.navigate("ResetInput");

  };

  return (
    <SafeAreaView style={styles.container}>


      <Image
        style={styles.logo}
        source={require("../../assets/splash_logo.png")} />


      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
        {/* Email */}
        <View style={styles.emailcontainer}>

          {/* icon */}
          <View style={styles.icon}>
            <FontAwesome name="user" size={24} color="#182430" style={styles.inputboxicon} />
          </View>

          <TextInput
            style={styles.email}
            placeholder="Enter Your Email"
            placeholderTextColor={"#848484"}
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>

        {/* Password */}
        <View style={styles.passowrdcontainer}>

          {/* icon */}
          <View style={styles.icon}>
            <FontAwesome name="lock" size={24} color="#182430" style={styles.inputboxicon} />
          </View>

          <TextInput
            style={styles.password}
            placeholder="Enter Your Password"
            placeholderTextColor={"#848484"}
            onChangeText={text => setPassword(text)}
            value={password}
          />

        </View>


        <View style={styles.btncontainer}>
          <TouchableHighlight style={styles.loginbtn} onPress={checklogin}>
            {loading ? <ActivityIndicator /> : <Text style={styles.loginbtnlabel}>Login</Text>}
          </TouchableHighlight>

        </View>


        <View style={styles.pressable}>

          <Pressable onPress={signup_navigation}>
            <Text style={styles.signuptext}>Don’t have an account? Sign Up</Text>
          </Pressable>

          <Pressable onPress={reset_password_navigation}>
            <Text style={styles.forgotpasswordtext}>Forgot Password?</Text>
          </Pressable>



        </View>


        <View style={styles.footertextcontainer}>

          <Text style={styles.footertext}>Buyer Protection | Seller Verification | Transaction Security</Text>

        </View>
      </KeyboardAvoidingView>






    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 100,
    width: 165,
    height: 183
  },

  container: {
    flex: 1,
    backgroundColor: "#EB6117",
    alignItems: "center",


  },

  footertext:
  {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: FONTS.cabin,
    marginLeft: 67,
    marginRight: 66
  },

  signuptext: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 40,
    fontFamily: FONTS.cabin
  },

  forgotpasswordtext: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "medium",
    marginLeft: 47,
    marginRight: 39,
    fontFamily: FONTS.cabin
  },

  icon:
  {
    backgroundColor: "#c5c5c4",
    width: 40,
    height: 37,
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 4,

  },

  email:
  {
    width: 260,
    height: 37,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#D9D9D9",
    shadowColor: "black",
    shadowOffset: { width: 3, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 4,
    fontFamily: FONTS.cabin,
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 19,

  },

  pressable:
  {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 36,
  },

  footertextcontainer:
  {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },

  inputboxicon: {
    marginTop: 5,
  },

  emailcontainer:
  {
    marginTop: -20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",

  },

  passowrdcontainer:
  {
    marginTop: 40,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  password:
  {
    width: 260,
    marginTop: 0,
    height: 37,
    width: 260,
    height: 37,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#D9D9D9",
    shadowColor: "black",
    shadowOffset: { width: 3, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 4,
    fontFamily: FONTS.cabin,
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 19,

  },

  btncontainer:
  {
    alignItems: "center",
    marginTop: 46,
  },

  loginbtn:
  {
    width: 163,
    height: 37,
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

  loginbtnlabel:
  {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",

  }

});
export default Login;