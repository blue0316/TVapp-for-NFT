import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainScreen, SparqScreen, ShowModelScreen} from './screens';

const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();

const AppNavigator = props => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="SparqScreen"
          component={SparqScreen}
          options={{
            title: 'Welcome to Sparq',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            title: 'Main Screen',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ShowModelScreen"
          component={ShowModelScreen}
          options={{
            title: 'Show Model Screen',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
