import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppProvider } from './App.provider';
import { BottomTabNavigator } from './screens/BottomTabs.navigator';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};
