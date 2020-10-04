import React from 'react'
import { StyleSheet, View, ImageBackground, Text, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import { colors } from '../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';


const VerticleBlogCard = ({imageURL, writerImageURL, title, time, writer, content}) => {
    const navigation=useNavigation();
    
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', {imageURL, writerImageURL, title, time, writer, content})}>
            <View>
            <ImageBackground source={{ uri: imageURL.toString()}} style={styles.container} imageStyle={{ borderRadius: 15 }}>
                <View style={styles.blur}>
                    <View style={{marginLeft: 15, marginBottom: 2}}>
                        <Text style={styles.textTitle}>{title}</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
                            <Image
                                source={{uri: writerImageURL.toString()}}
                                style={styles.imageWriter}
                            />
                            <Text style={styles.textWriter}>{writer}</Text>
                            <Text style={styles.textDate} >
                                <Entypo name="time-slot" size={9} color={colors.gray}/> {time}
                            </Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            </View>
            </TouchableOpacity>
    )
}

export default VerticleBlogCard

const styles = StyleSheet.create({
    container: {
        height: 340,
        width: 280,
        borderRadius: 10,
        elevation: 10,
        margin: 6,
    },
    blur: {
        flex: 1,
        borderRadius: 15,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba( 0, 0, 0, 0.5 )',
    },
    textTitle: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
    textWriter: {
        color: colors.gray2,
        fontSize: 12
    },
    textDate: {
        right: 0,
        color: colors.gray,
        marginLeft: 'auto',
        padding: 10,
        fontSize: 9,
    },
    imageWriter: {
        padding: 10,
        margin: 5,
        height: 28,
        width: 28,
        alignItems: 'center',
        borderRadius: 25
    }
})
