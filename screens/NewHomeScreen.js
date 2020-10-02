import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TextInput, Button,TouchableHighlight, ScrollView, Image } from 'react-native'

import { colors } from '../constants/theme'
import { Kaede } from 'react-native-textinput-effects'
import * as Font from 'expo-font';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const NewHomeScreen = ()=>
{
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
    return(

        <SafeAreaView>
            <ScrollView>
                <View style={styles.top_area}>
                   <View style={styles.profile_text}>
                       <Text style={styles.name}>Emily Parker</Text>
                       <Text style={styles.email}>emil.parker@gmail.com</Text>
                   </View>
                   <Image>

                   </Image>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default NewHomeScreen

const styles=  StyleSheet.create(
    {
        top_area:{
            backgroundColor:colors.lightPink,
            width : Dimensions.get('window').width,
            
        },
        profile_text:{
          marginTop:50,
          marginStart:50,
          marginBottom:20,
          alignSelf:"center"
        },
        name:{
            color:colors.black,
            fontFamily:'Quicksand-Medium',
            textAlign:'left',
            fontSize:20,
        },
        email:{
            color:colors.gray,
            fontFamily:'Quicksand-Medium',
            textAlign:'left',
            fontSize:14
        },
        profile_pic:{

        }
        });