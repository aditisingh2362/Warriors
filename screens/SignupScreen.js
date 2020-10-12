import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableHighlight,
  ScrollView,
  Alert,
  TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import { colors } from '../constants/theme';
import QuickSandBold from '../constants/QuickSandBold.js';
import QuickSandSemiBold from '../constants/QuickSandBold.js';
import QuickSandMedium from '../constants/QuickSandMedium.js';
import QuickSandRegular from '../constants/QuickSandRegular';
import QuickSandRegularInput from '../constants/QuickSandRegularInput.js';
import firebase from '../constants/firebase';
import { useDispatch } from 'react-redux';
import { setLoginTrue } from '../redux/login/loginActions';

const SignupScreen = props => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const signupUser = () => {
    //console.log(fullName);
    let displayName = fullName;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(authAct => {
        authAct.user
          .updateProfile({
            displayName: fullName
          })
          .then(() => {
            console.log('Success');
          })
          .catch(err => {
            Alert.alert(err.message);
          });
        dispatch(setLoginTrue({ email, fullName }));
      })
      .catch(err => {
        Alert.alert(err.message);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.text_area}>
          <QuickSandSemiBold style={styles.welcome}>Welcome,</QuickSandSemiBold>
          <QuickSandMedium style={styles.continue}>
            Signup to continue!
          </QuickSandMedium>
        </View>
        <QuickSandBold style={styles.slogan}>
          Supporting the{' '}
          <Text style={{ color: colors.tertiary }}>Fighters</Text>, Admiring the{' '}
          <Text style={{ color: colors.tertiary }}>Survivors</Text>, Honoring
          the <Text style={{ color: colors.tertiary }}>Taken</Text>
        </QuickSandBold>
        <View style={styles.input_area}>
          <QuickSandRegularInput
            placeholder='Full Name'
            style={styles.name_box}
            numberOfLines={1}
            clearButtonMode='while-editing'
            returnKeyType='next'
            value={fullName}
            onChangeText={text => {
              setFullName(text);
            }}
          />
          <QuickSandRegularInput
            placeholder='Email'
            style={styles.email_box}
            multiline={false}
            clearButtonMode='while-editing'
            returnKeyType='next'
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
          />
          <QuickSandRegularInput
            placeholder='Password'
            secureTextEntry={true}
            style={styles.password_box}
            multiline={false}
            returnKeyType='next'
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
          />
          <QuickSandRegularInput
            placeholder='Confirm Password'
            secureTextEntry={true}
            style={styles.password_box}
            multiline={false}
            returnKeyType='done'
            value={password2}
            onChangeText={text => {
              setPassword2(text);
            }}
          />
        </View>
        <TouchableHighlight
          style={styles.login_button}
          onPress={() => {
            signupUser();
          }}
        >
          <QuickSandRegular style={styles.login_text}>
            Create account
          </QuickSandRegular>
        </TouchableHighlight>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <QuickSandRegular style={{ alignSelf: 'center', marginBottom: 25 }}>
            Already have an account?
            <Text
              style={{
                textDecorationLine: 'underline',
                color: colors.tertiary
              }}
            >
              <Text> </Text>Login
            </Text>
          </QuickSandRegular>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    backgroundColor: colors.white,
    flexDirection: 'column',
    height: '100%'
  },
  slogan: {
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 20
  },

  text_area: {
    backgroundColor: colors.redPink,
    height: 170,
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
  name_box: {
    fontSize: 15,
    textAlign: 'left',
    width: Dimensions.get('window').width - 20,
    height: 55,
    backgroundColor: colors.lightLilac,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 17,
    padding: 10,
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
    marginTop: 15,
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
    fontFamily: 'Quicksand-Medium',
    color: colors.white,
    alignSelf: 'center',
    fontSize: 15
  }
});
