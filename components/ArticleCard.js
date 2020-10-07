import React from 'react'
import { StyleSheet, Image} from 'react-native'
import { colors } from '../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { Icon, Card, Button } from 'react-native-elements'
import QuickSandMedium from '../constants/QuickSandMedium'
import QuickSandRegular from '../constants/QuickSandRegular'
import {  TouchableOpacity } from 'react-native-gesture-handler';

const ArticleCard = ({id, img_uri, title, description, content,publisher, style}) => {
    const navigation=useNavigation();

    return (
        <TouchableOpacity>
            <Card
                containerStyle={[styles.container, style]}>
                <Image
                    source={{uri: img_uri.toString()}}
                    style={styles.image}
                />
                <QuickSandMedium style={styles.headline}>{title}</QuickSandMedium>
        
            
            </Card>
        </TouchableOpacity>
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
