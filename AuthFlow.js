import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./components/TabNavigation";
import LoginStackNavigation from "./components/LoginStackNavigation";

const AuthFlow = () => {
    const isLogin = useSelector((state) => state);
    return (
        <NavigationContainer>
            {!isLogin ? <LoginStackNavigation /> : <TabNavigation />}
        </NavigationContainer>
    );
};

export default AuthFlow;
