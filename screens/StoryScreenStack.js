import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import StoryScreen from './StoryScreen';
import ScrollableHeader from '../components/ScrollableHeader';
import AddStory from './AddStory';

const Stack = createStackNavigator();

const StoryScreenStack = () => {
    return (
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}                
      >
        <Stack.Screen name="Story" component={StoryScreen}/> 
        <Stack.Screen name="Details" component={ScrollableHeader} />
        <Stack.Screen name="Add" component={AddStory} />
      </Stack.Navigator>
    )
}

export default StoryScreenStack

const styles = StyleSheet.create({})