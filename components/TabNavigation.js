import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ExamineScreen from '../screens/ExamineScreen';
import LifestyleScreen from '../screens/LifestyleScreen';
import DoctorComponent from './DoctorComponent';
import DoctorOption from './DoctorOption';
import { colors } from '../constants/theme';
import StoryScreenStack from '../screens/StoryScreenStack';
import Profile from './profile/Profile';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <Entypo name='home' size={size} color={color} />;
          } else if (route.name === 'Story') {
            return <Entypo name='open-book' size={size} color={color} />;
          } else if (route.name === 'Examine') {
            return <Entypo name='check' size={size} color={color} />;
          } else if (route.name === 'Lifestyle') {
            return <FontAwesome5 name='apple-alt' size={size} color={color} />;
          } else if (route.name === 'Doctor') {
            return <DoctorOption />;
          }
        }
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.primary,
        inactiveTintColor: colors.white,
        tabStyle: {
          padding: 8
        },
        style: {
          backgroundColor: '#535353',
          marginTop: 0,
          borderTopWidth: 0,
          elevation: 10
        },
        iconStyle: {
          margin: 8
        }
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Story' component={StoryScreenStack} />
      <Tab.Screen name='Doctor' component={DoctorComponent} />
      <Tab.Screen name='Examine' component={ExamineScreen} />
      <Tab.Screen name='Lifestyle' component={LifestyleScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
