import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from "../constants/theme";
import { ProgressBar} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

const LifestyleCard = (props) => {
    return (
        <View style={[styles.container, {backgroundColor: props.bgcolor}]} >
            <View style={{marginVertical: 10, marginLeft: 5}}>
            <Entypo name={props.icon} size={20} color={colors.tertiary} />
            </View>
            <View style={{marginVertical: 10, marginLeft: 5}}>
            <Text>{props.cardName}</Text>
            </View>
            <View style={{marginVertical: 10, marginLeft: 5}}>
                <Text>{props.numerator} / {props.denominator} </Text>
                <Text>{props.unit}</Text>
            </View>
            <View style={{margin: 10}}>
            <ProgressBar progress={0.2} color={colors.tertiary} style={{borderRadius: 4, height: 8}}/>
            </View>
            <View style={{marginVertical: 10, marginLeft: 5, paddingBottom: 'auto'}}>
            <Text>{props.text}</Text>
            </View>
        </View>
    )
}

export default LifestyleCard

const styles = StyleSheet.create({
    container:{
        flex: 1,
        elevation: 10,
        borderRadius: 10,
        margin: 6,
        paddingLeft: 3
    }
})
