import React from "react";
import DoctorProfile from "./consult-doctor/DoctorProfile";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./profile/Profile";

const Stack = createStackNavigator();

const DoctorComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default DoctorComponent;
