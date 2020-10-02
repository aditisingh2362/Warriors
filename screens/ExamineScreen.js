import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ExamineScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Examine Screen</Text>
        </View>
    )
}

export default ExamineScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
