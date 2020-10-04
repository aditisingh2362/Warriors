import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import QuickSandSemiBold from '../constants/QuickSandSemiBold'

const LifestyleScreen = () => {
    return (
        <View style={styles.container}>
            <QuickSandSemiBold>Lifestyle Screen</QuickSandSemiBold>
        </View>
    )
}

export default LifestyleScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
