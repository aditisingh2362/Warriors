import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TextInput, Button,TouchableHighlight, ScrollView } from 'react-native'

import { colors } from '../constants/theme'
import { Kaede } from 'react-native-textinput-effects'
import * as Font from 'expo-font';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const SignupScreen = () => {
    // let [fontsLoaded] = useFonts({
    //     'Mightype-Script': require('/home/medhavi/Warriors/assets/fonts/Mightype-Script.otf'),
    //   });
    //   if (!fontsLoaded) {
    //     return <AppLoading />;
    //   } 
    //    else
    //    {
        const [loaded,error] = useFonts({
                'Mightype-Script': require('/home/medhavi/Warriors/assets/fonts/Mightype-Script.otf'),
                'Quanto-0Wg1G' : require('/home/medhavi/Warriors/assets/fonts/Quanto-0Wg1G.ttf'),
                'BrighlyCrushShine-8Ma90': require('/home/medhavi/Warriors/assets/fonts/BrighlyCrushShine-8Ma90.otf'),
                'Quicksand-Bold': require('/home/medhavi/Warriors/assets/fonts/Quicksand-Bold.ttf'),
                'Quicksand-Medium': require('/home/medhavi/Warriors/assets/fonts/Quicksand-Medium.ttf')
               });
        if(!loaded)
        {
            return null;
        }
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>

                
                <View style={styles.text_area}>
                <Text style={styles.welcome}>Welcome,</Text>
                <Text style={styles.continue}>Signup to continue!</Text>
                </View>
                <Text style={styles.slogan}>Supporting the <Text style={{ color:colors.tertiary, fontWeight:"bold"}}>Fighters</Text>, Admiring the <Text style={{ color:colors.tertiary, fontWeight:"bold"}}>Survivors</Text>, Honoring the <Text style={{ color:colors.tertiary, fontWeight:"bold"}}>Taken</Text></Text>
            <View style={styles.input_area}>
                <TextInput placeholder='Full Name' style={styles.name_box} numberOfLines={1} clearButtonMode='while-editing' returnKeyType='next'/>
                <TextInput placeholder='Contact Number' style={styles.email_box} multiline={false}clearButtonMode='while-editing' returnKeyType='next'/>
                <TextInput placeholder='Email' style={styles.email_box} multiline={false} clearButtonMode='while-editing'returnKeyType='next'/>
                <TextInput placeholder='Password' secureTextEntry={true} style={styles.password_box} multiline={false} returnKeyType='next'/>
                <TextInput placeholder='Confirm Password' secureTextEntry={true} style={styles.password_box} multiline={false} returnKeyType='done'/>
                
             </View>
             
             
               
             
             
             {/* <View style={styles.login_button}>
             <Button title="Login" color={colors.primary}>
             </Button>
             </View> */}
             <TouchableHighlight style={styles.login_button}>
                 <Text style={styles.login_text}>Create account</Text>
             </TouchableHighlight>
             <Text style={{alignSelf:'center', fontFamily:'Quicksand-Medium',marginBottom:25}}>Already have an account?<Text style={{textDecorationLine:'underline', fontFamily:'Quicksand-Medium', color:colors.tertiary}}>Login</Text></Text>
             <View style={{flex:1, flexDirection:'row', width :Dimensions.get('window').width, justifyContent: 'space-between'}}>
             <View style={styles.design}>
             </View>
             <View style={styles.design2}>
             </View>
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
        fontFamily:'Mightype-Script',
       
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
        fontWeight:'600',
        alignSelf:'flex-start',
        justifyContent:'flex-start',
        marginTop:50,
        marginLeft:20,
        color:colors.white,
        fontFamily:'Quicksand-Bold'
    },
    continue:{
        
        textAlign:'left',
        fontSize:18,
        fontWeight:'600',
        alignSelf:'flex-start',
        color:colors.white,
        marginTop:5,
        marginLeft:20,
        fontFamily:'Quicksand-Medium',

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
        fontFamily: 'Quicksand-Medium'
        
        
        
       
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
        fontFamily: 'Quicksand-Medium'
        
        
        
       
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
        fontFamily: 'Quicksand-Medium'
            
           
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
                fontFamily:'Quicksand-Medium',
                color: colors.tertiary,
                marginTop:20,
                alignSelf:'flex-end',
                marginEnd:20,
                justifyContent:'flex-end',
                textDecorationLine: 'underline',
                // textDecorationColor:colors.tertiary
            },
            login_text:{
                fontFamily:'Quicksand-Medium',
                color: colors.white,
                alignSelf:'center',
                fontSize:15,
                
            }
    
});