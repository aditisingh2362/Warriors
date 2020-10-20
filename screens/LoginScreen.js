import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Alert
} from 'react-native';
import { colors } from '../constants/theme';
import QuickSandBold from '../constants/QuickSandBold.js';
import QuickSandSemiBold from '../constants/QuickSandBold.js';
import QuickSandMedium from '../constants/QuickSandMedium.js';
import QuickSandRegular from '../constants/QuickSandRegular';
import QuickSandRegularInput from '../constants/QuickSandRegularInput.js';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { setLoginTrue } from '../redux/login/loginActions';
import { useNavigation } from '@react-navigation/native';
import firebase from '../constants/firebase';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    console.log(email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        //console.log();
        dispatch(setLoginTrue({ email, fullName: auth.user.displayName }));
      })
      .catch(err => Alert.alert(err.message));
  };

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
        <QuickSandRegularInput
          placeholder='Email'
          style={styles.email_box}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <QuickSandRegularInput
          placeholder='Password'
          secureTextEntry={true}
          style={styles.password_box}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Feature yet to be implemented');
        }}
      >
        <QuickSandMedium style={styles.forgot_password}>
          Forgot password
        </QuickSandMedium>
      </TouchableOpacity>
      <TouchableOpacity style={styles.login_button} onPress={() => loginUser()}>
        <QuickSandRegular style={styles.login_text}>Login</QuickSandRegular>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'baseline',
          justifyContent: 'center'
        }}
        onPress={() => navigation.navigate('SignUp')}
      >
        <QuickSandRegular>Don't have an account? </QuickSandRegular>

        <QuickSandRegular
          style={{ textDecorationLine: 'underline', color: colors.tertiary }}
        >
          {' '}
          Signup
        </QuickSandRegular>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    backgroundColor: colors.white,
    flexDirection: 'column',
    height: '100%',
    width: '100%'
  },
  slogan: {
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 20
  },
  text_area: {
    backgroundColor: colors.redPink,
    height: 200,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 20,
    paddingHorizontal: 40
  },
  welcome: {
    textAlign: 'left',
    fontSize: 35,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 50,
    marginLeft: 20,
    color: colors.white
  },
  continue: {
    textAlign: 'left',
    fontSize: 18,
    alignSelf: 'flex-start',
    color: colors.white,
    marginTop: 5,
    marginLeft: 20
  },
  input_area: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5
  },
  email_box: {
    fontSize: 15,
    textAlign: 'left',
    width: Dimensions.get('window').width - 20,
    height: 55,
    backgroundColor: colors.lightLilac,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 35,
    borderRadius: 17,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5
  },
  password_box: {
    fontSize: 15,
    textAlign: 'left',
    width: Dimensions.get('window').width - 20,
    height: 55,
    backgroundColor: colors.lightLilac,
    marginTop: 15,
    borderRadius: 17,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5
  },
  login_button: {
    width: 170,
    height: 45,
    borderRadius: 90,
    marginBottom: 20,
    backgroundColor: colors.redPink,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10
  },
  forgot_password: {
    color: colors.tertiary,
    marginTop: 20,
    alignSelf: 'flex-end',
    marginEnd: 20,
    justifyContent: 'flex-end',
    textDecorationLine: 'underline'
  },
  login_text: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 15
  }
});
