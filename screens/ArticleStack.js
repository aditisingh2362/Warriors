import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import ArticleScreen from '../components/ArticleScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const ArticleStack = () => {
    return (
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        
        <Stack.Screen name="ArticleScreen" component={ArticleScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    )
}

export default ArticleStack

const styles = StyleSheet.create({})