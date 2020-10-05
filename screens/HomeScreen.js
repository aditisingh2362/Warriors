import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableHighlight, FlatList, ScrollView, Image } from 'react-native'
import { Icon, Card, Button } from 'react-native-elements'
import { colors} from '../constants/theme'
import woman from '../assets/woman.png';
import QuickSandSemiBold from '../constants/QuickSandSemiBold'
import QuickSandMedium from '../constants/QuickSandMedium'
import QuickSandRegular from '../constants/QuickSandRegular'
import QuickSandBold from '../constants/QuickSandBold'
import ArticleCard from '../components/ArticleCard.js'

const Data=[
    {
        id: '1',
        img: 'https://affairscloud.com/breast-cancer-awareness-month-2020-1st-31st-october/',
        title: 'Breast Cancer and Nutrition: Tips for Maintaining a Healthy Diet',
        description:'Nausea, vomiting, and mouth sores are all common side effects of breast cancer treatment. When you feel sick to your stomach and your mouth hurts, you may start to dread mealtimes.Yet eating a balanced diet is especially important when you have breast cancer. Proper nutrition helps your body heal from treatment. Eating right will keep you at a healthy weight and help preserve your muscle strength.\n'
    },
    {
        id: '2',
        img: 'https://affairscloud.com/breast-cancer-awareness-month-2020-1st-31st-october/',
        title: 'For Women with Breast Cancer, Regular Exercise May Improve Survival',
        description:'Nausea, vomiting, and mouth sores are all common side effects of breast cancer treatment. When you feel sick to your stomach and your mouth hurts, you may start to dread mealtimes.Yet eating a balanced diet is especially important when you have breast cancer. Proper nutrition helps your body heal from treatment. Eating right will keep you at a healthy weight and help preserve your muscle strength.\n'
    },
    {
        id: '3',
        img: 'https://affairscloud.com/breast-cancer-awareness-month-2020-1st-31st-october/',
        title: 'Management of Breast Cancer during the COVID-19 Pandemic.',
        description:'Nausea, vomiting, and mouth sores are all common side effects of breast cancer treatment. When you feel sick to your stomach and your mouth hurts, you may start to dread mealtimes.Yet eating a balanced diet is especially important when you have breast cancer. Proper nutrition helps your body heal from treatment. Eating right will keep you at a healthy weight and help preserve your muscle strength.\n'
    },
    {
        id: '4',
        img: 'https://affairscloud.com/breast-cancer-awareness-month-2020-1st-31st-october/',
        title: 'Management of Breast Cancer during the COVID-19 Pandemic.',
        description:'Nausea, vomiting, and mouth sores are all common side effects of breast cancer treatment. When you feel sick to your stomach and your mouth hurts, you may start to dread mealtimes.Yet eating a balanced diet is especially important when you have breast cancer. Proper nutrition helps your body heal from treatment. Eating right will keep you at a healthy weight and help preserve your muscle strength.\n'
    },
    {
        id: '5',
        img: 'https://affairscloud.com/breast-cancer-awareness-month-2020-1st-31st-october/',
        title: 'For Women with Breast Cancer, Regular Exercise May Improve Survival',
        description:'Nausea, vomiting, and mouth sores are all common side effects of breast cancer treatment. When you feel sick to your stomach and your mouth hurts, you may start to dread mealtimes.Yet eating a balanced diet is especially important when you have breast cancer. Proper nutrition helps your body heal from treatment. Eating right will keep you at a healthy weight and help preserve your muscle strength.\n'
    },
    {
        id: '6',
        img: 'https://affairscloud.com/breast-cancer-awareness-month-2020-1st-31st-october/',
        title: 'Breast Cancer and Nutrition: Tips for Maintaining a Healthy Diet',
        description:'Nausea, vomiting, and mouth sores are all common side effects of breast cancer treatment. When you feel sick to your stomach and your mouth hurts, you may start to dread mealtimes.Yet eating a balanced diet is especially important when you have breast cancer. Proper nutrition helps your body heal from treatment. Eating right will keep you at a healthy weight and help preserve your muscle strength.\n'
    },

]
const HomeScreen = ()=>
{
    const defaultWomanUri = Image.resolveAssetSource(woman).uri



    return(

        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.top_area}>
                    <View style={styles.profile_area}>
                   <View style={styles.profile_text}>
                       <QuickSandSemiBold style={styles.name}>Emily Parker</QuickSandSemiBold>
                       <QuickSandMedium style={styles.email}>emil.parker@gmail.com</QuickSandMedium>
                   </View>
                   <Image style={styles.profile_pic} source={{uri : defaultWomanUri}}>
                   </Image>
                   </View>
                   <View style={styles.button_area}>
                       <Button buttonStyle={styles.edit_button}  raised={true} type='outline' title="Edit" titleStyle={styles.edit_text} icon={<Icon name='edit' size={20} color={colors.tertiary} style={{marginStart:10}}></Icon>} ></Button>
                       <Button buttonStyle={styles.logout_button} raised={true} type='outline' title="Logout" titleStyle={styles.edit_text}  ></Button>
                   
                       
                   </View>
                </View>
                <Card containerStyle={styles.card}>
                
                <QuickSandBold style={styles.quote}>Never give up. Life is worth living. There is life after cancer.</QuickSandBold>
                </Card>
                <FlatList contentContainerStyle={{justifyContent:'center'}} style={styles.list} horizontal={true} data={Data} showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => index.toString()} renderItem={({item:rowData})=>{
                return(
                   <ArticleCard id={rowData.index} img_uri={rowData.img} title={rowData.title} description={rowData.description} article_url="abc">

                   </ArticleCard>
                );
            }} />

               
                <Card containerStyle={styles.card2}>
                <QuickSandBold style={styles.quote}>Fight like a girl.</QuickSandBold>
                </Card>

            </ScrollView>
        </SafeAreaView>
    )
}
export default HomeScreen

const styles=  StyleSheet.create(
    {
        container:{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height

        },
        top_area:{
            backgroundColor:colors.redPink,
            width : Dimensions.get('window').width,
            flexDirection:'column',
            flex : 1,
            shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 15,
            
        },
        profile_area:{
            backgroundColor:colors.redPink,
            width : Dimensions.get('window').width,
            flexDirection:'row',
            flex : 1,
            justifyContent:'space-between',
            marginTop:50
            
        },
        button_area:{
            backgroundColor:colors.redPink,
            width : Dimensions.get('window').width,
            flexDirection:'row',
            flex : 1,
            justifyContent:'space-around',
            alignItems:'center',
            marginTop:20,
            marginBottom:20,
            height:45,
           
    
           
            
        },
        
        profile_text:{
          marginStart:50,
          marginBottom:20,
          alignSelf:'flex-start',
          justifyContent:'flex-start',
         
          
        },
        name:{
            color:colors.white,
            textAlign:'left',
            fontSize:20,
        },
        email:{
            color:colors.white,
            textAlign:'left',
            fontSize:14
        },
        profile_pic:{
            width: 90, 
            height: 90, 
            justifyContent:'flex-end',
            resizeMode:'cover',
            alignSelf : 'flex-end',
            borderColor:colors.tertiary,
            overflow : "hidden",
            backgroundColor:colors.accent,
            borderRadius:45,
            marginEnd:10,

           
            
    
          },
          button_styling:{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent:'center',
            width: 120,
          },
          edit_button:{
            width:110,
            borderRadius:90,
            backgroundColor:colors.white,
            borderColor:colors.tertiary,
            borderWidth:2,
            justifyContent:'flex-start',
            alignSelf:'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 10,
            flex:1,
        },
        logout_button:{
            width:110,
            borderRadius:90,
            backgroundColor:colors.white,
            borderColor:colors.tertiary,
            borderWidth:2,
            justifyContent:'flex-end',
            alignSelf:'flex-end',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 10,
            flex:1
        },
          edit_text:{
            color: colors.tertiary,
            alignSelf:'center',
            justifyContent:'center'
,            fontSize:15,
            flex: 1,

        },
        card:{
            backgroundColor: colors.lightLilac,
            borderRadius:20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 25,
            marginTop:40,
            borderColor:colors.tertiary,
            borderWidth:0
        },
        card2:{
            backgroundColor: colors.lightLilac,
            borderRadius:20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 25,
            borderColor:colors.tertiary,
            borderWidth:0,
            justifyContent:'flex-end',
            marginBottom:40
        },
        cardTitle:{
            color:colors.tertiary,
            fontSize:15,
            textAlign:'center',
            marginBottom:5
            
        },
        quote:{
            color:colors.tertiary,
            fontSize:18,
            textAlign:'center',
            marginBottom:5,
            fontWeight:'900'
            
        },
        cardDivider:{
            height: 2,
            backgroundColor: colors.tertiary
        },
        list:{
            width: Dimensions.get('window').width,
            
        }
        });