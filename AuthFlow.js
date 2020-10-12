import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './components/TabNavigation';
import LoginStackNavigation from './components/LoginStackNavigation';

const AuthFlow = () => {
  const isLogin = useSelector(state => state);
  console.log('login', isLogin);
  return (
    <NavigationContainer>
      {!isLogin.isLogin ? <LoginStackNavigation /> : <TabNavigation />}
    </NavigationContainer>
  );
};

export default AuthFlow;
