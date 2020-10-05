import React from 'react';
import SearchDoctor from './consult-doctor/SearchDoctor';
import DoctorProfile from './consult-doctor/DoctorProfile';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const DoctorComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Search'
        component={SearchDoctor}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='DoctorProfile'
        component={DoctorProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default DoctorComponent;
