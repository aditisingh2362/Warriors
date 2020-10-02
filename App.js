import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './components/TabNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
  );
}

