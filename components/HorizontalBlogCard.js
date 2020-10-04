import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import QuickSandRegular from "../constants/QuickSandRegular";
import QuickSandSemiBold from "../constants/QuickSandSemiBold";
import QuickSandBold from '../constants/QuickSandBold';

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
                <QuickSandBold style={styles.text}>{title}</QuickSandBold>
                <View
                style={{
                  borderBottomColor: colors.tertiary,
                  borderBottomWidth: 0.5,
                  width: 100,
                  marginVertical: 3,
                  borderRadius: 10,
                }}
              />
                <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: writerImageURL.toString() }}
                  style={styles.imageWriter}
                />
                <QuickSandRegular style={styles.textWriter}>
                  {writer}
                </QuickSandRegular>
              </View>
            </View>
        </TouchableOpacity>
    )
}

export default HorizontalBlogCard

const styles = StyleSheet.create({
    container: {
        margin: 4,
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
        borderColor: colors.tertiary,
        borderWidth: 0.3
    },
    textDate: {
        right: 0,
        color: colors.gray,
        paddingTop: 'auto',
        fontSize: 9,
    },
    text: {
        fontSize: 23  
    },
    imageWriter: {
        padding: 10,
        margin: 5,
        height: 23,
        width: 23,
        alignItems: "center",
        borderRadius: 25,
      },
      textWriter: {
        color: colors.gray,
        fontSize: 12,
      },
})
