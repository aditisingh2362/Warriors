import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { colors } from '../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Icon, Card, Button } from 'react-native-elements'
import QuickSandMedium from '../constants/QuickSandMedium'
import QuickSandRegular from '../constants/QuickSandRegular'

const ArticleCard = ({id, img_uri, title, description, style}) => {
    const navigation=useNavigation();

    return (
        <Card
            containerStyle={[styles.container, style]}
            onPress={() => navigation.navigate('Details', {id,img_uri, title, description})}
            >
           
            <Image
                source={{uri: img_uri.toString()}}
                style={styles.image}
            />
            <QuickSandMedium style={styles.headline}>{title}</QuickSandMedium>
        
            
        </Card>
    )
}


export default ArticleCard

const styles = StyleSheet.create({
    container: {

        width: 250,
        elevation: 10,
        borderRadius: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 20,
        justifyContent: 'flex-start',
        alignSelf: 'center',
        height : 200,
    
        },
    image: {
        height: 70,
        width: 70,
        borderRadius: 70,
        justifyContent:'center',
        alignSelf:'center',
        marginBottom:10,
        borderWidth:1,
        borderColor:colors.black
       
    },

    headline: {
        color: colors.black,
        fontSize: 14,
       

    },
 
})
