import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SignupScreen from '../screens/SignupScreen.js'



const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <SignupScreen></SignupScreen>
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
