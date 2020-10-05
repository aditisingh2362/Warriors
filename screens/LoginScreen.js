import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { colors } from "../constants/theme";
import QuickSandBold from "../constants/QuickSandBold.js";
import QuickSandSemiBold from "../constants/QuickSandBold.js";
import QuickSandMedium from "../constants/QuickSandMedium.js";
import QuickSandRegular from "../constants/QuickSandRegular";
import QuickSandRegularInput from "../constants/QuickSandRegularInput.js";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import setLoginTrue from "../redux/login/loginActions";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const dispatch = useDispatch();
    const navigation=useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text_area}>
        <QuickSandSemiBold style={styles.welcome}>Welcome,</QuickSandSemiBold>
        <QuickSandMedium style={styles.continue}>
          Login to continue!
        </QuickSandMedium>
      </View>
      <QuickSandBold style={styles.slogan}>
        Not Just Surviving, Thriving
      </QuickSandBold>
      <View style={styles.input_area}>
        <QuickSandRegularInput placeholder="Email" style={styles.email_box} />
        <QuickSandRegularInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.password_box}
        />
      </View>

      <QuickSandMedium style={styles.forgot_password}>
        Forgot password
      </QuickSandMedium>
      <TouchableOpacity
        style={styles.login_button}
        onPress={() => dispatch(setLoginTrue())}
      >
        <QuickSandRegular style={styles.login_text}>Login</QuickSandRegular>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "center",
        }}
        onPress={()=>navigation.navigate('SignUp')}
      >
        <QuickSandRegular>Don't have an account? </QuickSandRegular>

        <Text
          style={{ textDecorationLine: "underline", color: colors.tertiary }}
        >
          {" "}
          Signup
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          width: Dimensions.get("window").width,
          justifyContent: "space-between",
        }}
      >
        <View style={styles.design}></View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    backgroundColor: colors.white,
    flexDirection: "column",
  },
  slogan: {
    justifyContent: "center",
    textAlign: "center",
    marginTop: 20,
  },
  text_area: {
    backgroundColor: colors.redPink,
    height: 270,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 20,
    paddingHorizontal: 40,
  },
  welcome: {
    textAlign: "left",
    fontSize: 35,
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    marginTop: 50,
    marginLeft: 20,
    color: colors.white,
  },
  continue: {
    textAlign: "left",
    fontSize: 18,
    alignSelf: "flex-start",
    color: colors.white,
    marginTop: 5,
    marginLeft: 20,
  },
  input_area: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  email_box: {
    fontSize: 15,
    textAlign: "left",
    width: Dimensions.get("window").width - 20,
    height: 55,
    backgroundColor: colors.lightLilac,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 35,
    borderRadius: 17,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  password_box: {
    fontSize: 15,
    textAlign: "left",
    width: Dimensions.get("window").width - 20,
    height: 55,
    backgroundColor: colors.lightLilac,
    marginTop: 15,
    borderRadius: 17,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  login_button: {
    width: 170,
    height: 45,
    borderRadius: 90,
    marginBottom: 20,
    backgroundColor: colors.redPink,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
  },

  design: {
    backgroundColor: colors.pastelPink,
    height: 100,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 20,
    justifyContent: "flex-start",
    marginTop: 10,
    alignSelf: "flex-start",
    width: 90,
    flex: 0,
  },
  design2: {
    backgroundColor: colors.pastelPink,
    height: 200,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 20,
    justifyContent: "flex-end",
    marginTop: 10,
    alignSelf: "flex-end",
    width: 90,
    flex: 0,
  },
  forgot_password: {
    color: colors.tertiary,
    marginTop: 20,
    alignSelf: "flex-end",
    marginEnd: 20,
    justifyContent: "flex-end",
    textDecorationLine: "underline",
  },
  login_text: {
    color: colors.white,
    alignSelf: "center",
    fontSize: 15,
  },
});
