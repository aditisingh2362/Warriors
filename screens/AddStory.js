import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import {RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import { colors } from '../constants/theme';

const AddStory = () => {
    const richText =  React.createRef();
    

    function editorInitializedCallback() {
        richText.current?.registerToolbar(function (items) {
            console.log('Toolbar click, selected items (insert end callback):', items);
        });
    }


    return (
        <ScrollView keyboardDismissMode={'none'} showsVerticalScrollIndicator={false}>
            <View style={{flexDirection:'row', alignItems: 'center',justifyContent:'center', marginTop: 40}}>
            <Button title="Publish" color={colors.tertiary} />
            <Text>        </Text>
            <Button title="Draft" color={colors.tertiary}/>
            </View>
            <View style={[styles.container]}>
            <RichEditor
                ref={(r) => richtext = r}
                placeholder='please input content'
                editorStyle={{backgroundColor: colors.white, color: colors.black}}
                initialContentHTML='<b>Hello</b> <br> <p>Share your incredible stories with us and the world!</p>'
                editorInitializedCallback={() => editorInitializedCallback()}
                placeholder={'please input content'}
                />
            <RichToolbar getEditor={() => richtext}/>
            </View>
        </ScrollView>
    )
}

export default AddStory

const styles = StyleSheet.create({
    input: {
        flex: 1,
    },
    item: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#e8e8e8',
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    container:{
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 10
    }
})
