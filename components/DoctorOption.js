import React from 'react'
import { StyleSheet, View} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { colors } from '../constants/theme'
import Fontisto from 'react-native-vector-icons/Fontisto';

const DoctorOption = () => {
    return (
        <View style={{ position: "absolute", alignItems: 'center' }}>
            <View style={styles.button}>
                <TouchableHighlight underlayColor={colors.accent}>
                    <Fontisto name="doctor" size={36} color="white" />
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default DoctorOption

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: 72,
        height: 72,
        borderRadius: 36,
        position: 'absolute',
        top: -60,
        elevation: 10,
        shadowColor: 'white'

    }
})
