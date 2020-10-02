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
                    <Fontisto name="doctor" size={30} color="white" />
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default DoctorOption

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.tertiary,
        alignItems: 'center',
        justifyContent: 'center',
        width: 65,
        height: 65,
        borderRadius: 36,
        position: 'absolute',
        top: -50,
        elevation: 10,
        shadowColor: 'white'

    }
})
