import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Email_Password_Input from '/home/medhavi/Warriors/components/forms.js'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Email_Password_Input/>
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
