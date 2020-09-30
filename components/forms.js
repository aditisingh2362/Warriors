import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import {colors} from '/home/medhavi/Warriors/constants/theme.js'

const  Email_Password_Input=(props)=> {
    return(
         <View>
         <TextInput style={styles.email_box} placeholder='Email' ></TextInput>
         <TextInput style={styles.password_box}  placeholder='Password' secureTextEntry={true}></TextInput>
         </View>

      
    )
    
}
export default Email_Password_Input

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#ffffff',
        flexDirection:'column',
        alignItems:'flex-start',
        margin: 0,
        flex: 1
      },

      email_box:{
        fontSize:20,
        textAlign:'left',
        padding:10,
        borderRadius:10,
        backgroundColor: colors.lightGrey,
        borderColor: colors.primary,
        color: colors.black,
        },
        password_box:
        {
        fontSize:20,
        textAlign:'left',
        padding:10,
        borderRadius:10,
        backgroundColor: colors.lightGrey,
        borderColor: colors.primary,
        color: colors.black,
        
        },
      
  });

