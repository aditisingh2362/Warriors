import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TextInput,TouchableHighlight, FlatList, ScrollView, Image } from 'react-native'
import { Icon, Card, Button } from 'react-native-elements'
import { colors,load,fontFamily } from '../constants/theme'
import * as Font from 'expo-font';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import woman from '../assets/woman.png';

const HomeScreen = ()=>
{
    const defaultWomanUri = Image.resolveAssetSource(woman).uri
    const [loaded,error] = useFonts({
        'Mightype-Script': require('../assets/fonts/Mightype-Script.otf'),
        'Quicksand-Bold': require('../assets/fonts/Quicksand-Bold.ttf'),
        'Quicksand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
       });

if(!loaded)
{
    return null;
}
    return(

        <SafeAreaView>
            <ScrollView>
                <View style={styles.top_area}>
                    <View style={styles.profile_area}>
                   <View style={styles.profile_text}>
                       <Text style={styles.name}>Emily Parker</Text>
                       <Text style={styles.email}>emil.parker@gmail.com</Text>
                   </View>
                   <Image style={styles.profile_pic} source={{uri : defaultWomanUri}}>
                   </Image>
                   </View>
                   <View style={styles.button_area}>
                       <Button buttonStyle={styles.edit_button}  raised={true} type='outline' title="Edit" titleStyle={styles.edit_text} icon={<Icon name='edit' size={20} color={colors.tertiary} style={{marginStart:10}}></Icon>} ></Button>
                       <Button buttonStyle={styles.logout_button} raised={true} type='outline' title="Logout" titleStyle={styles.edit_text}  ></Button>
                   {/* <TouchableHighlight style={styles.edit_button}>
                       <View style={styles.button_styling}>

                       
                        <Text style={styles.edit_text}>Edit</Text>
                        
                        </View>
                       
                    </TouchableHighlight> */}
                    {/* <TouchableHighlight style={styles.logout_button}>
                       <View style={styles.button_styling}>

                       
                        <Text style={styles.edit_text}>Logout</Text>
                        {/* <Icon name='log-out' size={20} color={colors.tertiary} style={{marginStart:10}}></Icon> 
                        </View>
                       
                    </TouchableHighlight> */}
                       
                   </View>
                </View>
                <Card containerStyle={styles.card}>
                <Text style={styles.cardTitle}>Daily Dose of Motivation</Text>
                    {/* <Card.Divider style={styles.cardDivider}/> */}
                <Text style={styles.quote}>Never give up. Life is worth living. There is life after cancer.</Text>
                </Card>
            </ScrollView>
        </SafeAreaView>
    )
}
export default HomeScreen

const styles=  StyleSheet.create(
    {
        top_area:{
            backgroundColor:colors.redPink,
            width : Dimensions.get('window').width,
            flexDirection:'column',
            flex : 1,
            shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 25,
            
        },
        profile_area:{
            backgroundColor:colors.redPink,
            width : Dimensions.get('window').width,
            flexDirection:'row',
            flex : 1,
            justifyContent:'space-between',
            marginTop:50
            
        },
        button_area:{
            backgroundColor:colors.redPink,
            width : Dimensions.get('window').width,
            flexDirection:'row',
            flex : 1,
            justifyContent:'space-around',
            alignItems:'center',
            marginTop:20,
            marginBottom:20,
            height:45,
           
    
           
            
        },
        
        profile_text:{
          marginStart:50,
          marginBottom:20,
          alignSelf:'flex-start',
          justifyContent:'flex-start',
         
          
        },
        name:{
            color:colors.white,
            fontFamily: fontFamily.fontFamilyMedium,
            textAlign:'left',
            fontSize:20,
        },
        email:{
            color:colors.white,
            fontFamily: fontFamily.fontFamilyMedium,
            textAlign:'left',
            fontSize:14
        },
        profile_pic:{
            width: 90, 
            height: 90, 
            justifyContent:'flex-end',
            resizeMode:'cover',
            alignSelf : 'flex-end',
            borderColor:colors.tertiary,
            overflow : "hidden",
            backgroundColor:colors.accent,
            borderRadius:45,
            marginEnd:10,

           
            
    
          },
          button_styling:{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent:'center',
            width: 120,
          },
          edit_button:{
            width:110,
            borderRadius:90,
            backgroundColor:colors.white,
            borderColor:colors.tertiary,
            borderWidth:2,
            justifyContent:'flex-start',
            alignSelf:'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 10,
            flex:1,
        },
        logout_button:{
            width:110,
            borderRadius:90,
            backgroundColor:colors.white,
            borderColor:colors.tertiary,
            borderWidth:2,
            justifyContent:'flex-end',
            alignSelf:'flex-end',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 10,
            flex:1
        },
          edit_text:{
            fontFamily:'Quicksand-Medium',
            color: colors.tertiary,
            alignSelf:'center',
            justifyContent:'center'
,            fontSize:15,
            flex: 1,

        },
        card:{
            backgroundColor: colors.lightPink,
            borderRadius:20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 10,
            marginBottom:20,
            marginTop:40,
            borderColor:colors.tertiary,
            borderWidth:2
        },
        cardTitle:{
            fontFamily: fontFamily.fontFamilyBold,
            color:colors.tertiary,
            fontSize:18,
            textAlign:'center',
            marginBottom:5
            
        },
        quote:{
            fontFamily: fontFamily.fontFamilyCursive,
            color:colors.black,
            fontSize:27,
            textAlign:'center',
            marginBottom:5,
            fontWeight:'900'
            
        },
        cardDivider:{
            height: 2,
            backgroundColor: colors.tertiary
        }
        });