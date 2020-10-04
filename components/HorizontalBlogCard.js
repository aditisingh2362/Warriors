import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const HorizontalBlogCard = ({imageURL, writerImageURL, title, time, writer, content}) => {
    const navigation=useNavigation();

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => navigation.navigate('Details', {imageURL, writerImageURL, title, time, writer, content})}
        >
            <Image
                source={{uri: imageURL.toString()}}
                style={styles.image}
            />
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.textDate} >
                    <Entypo name="time-slot" size={9} color={colors.gray} /> {time}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default HorizontalBlogCard

const styles = StyleSheet.create({
    container: {
        margin: 6,
        height: 120,
        width: 350,
        elevation: 10,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 90,
        width: 80,
        top: 6,
        borderRadius: 10,
        marginRight: 10,
    },
    textDate: {
        right: 0,
        color: colors.gray,
        paddingTop: 'auto',
        fontSize: 9,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16
    }
})
