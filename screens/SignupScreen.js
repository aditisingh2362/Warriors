
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TextInput, Button,TouchableHighlight, ScrollView } from 'react-native'

import { colors } from '../constants/theme'
import QuickSandBold from '../constants/QuickSandBold.js'
import QuickSandSemiBold from '../constants/QuickSandBold.js'
import QuickSandMedium from '../constants/QuickSandMedium.js'
import QuickSandRegular from '../constants/QuickSandRegular'



const SignupScreen = () => {
    
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.text_area}>
                    <QuickSemiSandBold style={styles.welcome}>Welcome,</QuickSemiSandBold>
                    <QuickSandMedium style={styles.continue}>Signup to continue!</QuickSandMedium>
                    </View>
                    <QuickSemiSandBold style={styles.slogan}>Supporting the <Text style={{ color:colors.tertiary}}>Fighters</Text>, Admiring the <QuickSandBold style={{ color:colors.tertiary}}>Survivors</QuickSandBold>, Honoring the <QuickSandBold style={{ color:colors.tertiary, fontWeight:"bold"}}>Taken</QuickSandBold></QuickSemiSandBold>
                    <View style={styles.input_area}>
                        <QuickSandRegular placeholder='Full Name' style={styles.name_box} numberOfLines={1} clearButtonMode='while-editing' returnKeyType='next'/>
                        <QuickSandRegular placeholder='Contact Number' style={styles.email_box} multiline={false}clearButtonMode='while-editing' returnKeyType='next'/>
                        <QuickSandRegular placeholder='Email' style={styles.email_box} multiline={false} clearButtonMode='while-editing'returnKeyType='next'/>
                        <QuickSandRegular placeholder='Password' secureTextEntry={true} style={styles.password_box} multiline={false} returnKeyType='next'/>
                        <QuickSandRegular placeholder='Confirm Password' secureTextEntry={true} style={styles.password_box} multiline={false} returnKeyType='done'/>
                    </View>
                    <TouchableHighlight style={styles.login_button}>
                        <QuickSandRegular style={styles.login_text}>Create account</QuickSandRegular>
                    </TouchableHighlight>
                    <QuickSandRegular style={{alignSelf:'center',marginBottom:25}}>Already have an account?<QuickSandRegular style={{textDecorationLine:'underline', color:colors.tertiary}}>Login</QuickSandRegular></QuickSandRegular>
                    <View style={{flex:1, flexDirection:'row', width :Dimensions.get('window').width, justifyContent: 'space-between'}}>
                        <View style={styles.design}></View>
                        <View style={styles.design2}></View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
      }
    
    


export default SignupScreen

const styles = StyleSheet.create({
            container:{
                
                position:"absolute",
                top:0,
                backgroundColor:colors.white,
                flexDirection:'column'
            },
            slogan:{
                justifyContent:'center',
                textAlign:'center',
                fontSize:25,
                marginTop:20,
            
            },
        
            text_area:{
                backgroundColor:colors.redPink,
                height: 170,
                borderBottomLeftRadius:0,
                borderBottomRightRadius:300,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 20,
                paddingHorizontal:40
                
            },
            welcome:{
                
                textAlign:'left',
                fontSize:35,
                alignSelf:'flex-start',
                justifyContent:'flex-start',
                marginTop:50,
                marginLeft:20,
                color:colors.white,
            },
            continue:{
                
                textAlign:'left',
                fontSize:18,
                alignSelf:'flex-start',
                color:colors.white,
                marginTop:5,
                marginLeft:20,

            },
            input_area:{
                alignItems:'center',
                alignSelf:'center',
                justifyContent:'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 5,
            

            },
            name_box:{
                fontSize:15,
                textAlign:'left',
                width :Dimensions.get('window').width-20,
                height: 55,
                backgroundColor: colors.lightLilac,
                justifyContent:'center',
                alignSelf:'center',
                marginTop:25,
                borderRadius:17,
                padding:10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 5,
                },
            email_box:{
                fontSize:15,
                textAlign:'left',
                width :Dimensions.get('window').width-20,
                height: 55,
                backgroundColor: colors.lightLilac,
                justifyContent:'center',
                alignSelf:'center',
                marginTop:15,
                borderRadius:17,
                padding:10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 5,
                
            },
            password_box:{
                fontSize:15,
                textAlign:'left',
                width :Dimensions.get('window').width-20,
                height: 55,
                backgroundColor: colors.lightLilac,
                marginTop:15,
                borderRadius:17,
                padding:10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 5,
                },

            login_button:{
                width:170,
                height:45,
                borderRadius:90,
                marginBottom:20,
                backgroundColor:colors.redPink,
                justifyContent:'center',
                alignSelf:'center',
                marginTop:30,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 10,
            },
            design:{        
                backgroundColor:colors.pastelPink,
                height: 100,
                borderTopLeftRadius:0,
                borderTopRightRadius:100,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 20,
                justifyContent:'flex-start',
                marginTop: 10,
                alignSelf:'flex-start',
                width:90,
                flex:0
       
        
            },
            design2:{
                
                backgroundColor:colors.pastelPink,
                height: 200,
                borderTopLeftRadius:100,
                borderBottomLeftRadius:100,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 20,
                justifyContent:'flex-end',
                marginTop: 10,
                alignSelf:'flex-end',
                width:90,
                flex:0
               
                
            },
            forgot_password:{

                color: colors.tertiary,
                marginTop:20,
                alignSelf:'flex-end',
                marginEnd:20,
                justifyContent:'flex-end',
                textDecorationLine: 'underline',
                
            },
            login_text:{
                fontFamily:'Quicksand-Medium',
                color: colors.white,
                alignSelf:'center',
                fontSize:15,
                
            }
    
});