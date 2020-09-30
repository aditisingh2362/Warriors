import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LifestyleScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Lifestyle Screen</Text>
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
