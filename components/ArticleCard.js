import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { colors } from '../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Icon, Card, Button } from 'react-native-elements'
import QuickSandMedium from '../constants/QuickSandMedium'
import QuickSandRegular from '../constants/QuickSandRegular'

const ArticleCard = ({id, img_uri, title, description, article_url}) => {
    const navigation=useNavigation();

    return (
        <Card
            containerStyle={styles.container}
            onPress={() => navigation.navigate('Details', {id,img_uri, title, description, article_url})}
            >
            <View style={{flex:1, flexDirection:'row', justifyContent: 'space-around'}}>
            <Image
                source={{uri: img_uri.toString()}}
                style={styles.image}
            />
            <QuickSandMedium style={styles.headline}>{title}</QuickSandMedium>
            </View>
            <Card.Divider></Card.Divider>
            
           <QuickSandRegular style={styles.description}>{description}</QuickSandRegular>
           <QuickSandRegular style={styles.article_url}>See full article</QuickSandRegular>
        </Card>
    )
}

export default ArticleCard

const styles = StyleSheet.create({
    container: {

        width: Dimensions.get('window').width,
        elevation: 10,
        borderRadius: 6,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 0,
        paddingVertical:12,
        paddingHorizontal:15,
        justifyContent: 'center',
        alignSelf: 'center'
        },
    image: {
        height: 50,
        width: 50,
        borderRadius: 50,
        alignSelf: 'flex-start',
        justifyContent: 'flex-start'
    },

    headline: {
        color: colors.black,
        fontSize: 15,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'

    },
    description:{
        color: colors.black,
        fontSize: 12,



    },
    article_url:{
        color: colors.navyBlue,
        fontSize:12,
        textAlign:'left',
        textDecorationLine:'underline'
    }
})
