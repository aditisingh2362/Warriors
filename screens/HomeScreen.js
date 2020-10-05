import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoginScreen from '../screens/LoginScreen.js'



const HomeScreen = () => {
    return (
        <View style={styles.container}>
          <LoginScreen></LoginScreen>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
});
