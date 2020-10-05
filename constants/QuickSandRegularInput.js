import React from 'react'
import { StyleSheet, View,TextInput } from 'react-native'
import { useFonts } from '@use-expo/font';
//import { TextInput } from 'react-native-paper';

const QuickSandRegularInput = (props) => {
    const [loaded] = useFonts({
        'Quicksand-Regular': require('../assets/fonts/Quicksand-Regular.ttf'),
       });
       if(!loaded)
       {
           return <TextInput>{props.children}</TextInput>;
       }
    return (
        <View>
            <TextInput style={[styles.defaultStyle, props.style]} secureTextEntry={props.secureTextEntry} placeholder={props.placeholder} returnKeyType={props.returnKeyType} >
                {props.children}
            </TextInput>
        </View>
    )
}

export default QuickSandRegularInput

const styles = StyleSheet.create({
    defaultStyle: {
        fontFamily: "Quicksand-Regular"
    },
})
