// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from '../screens/screen1';
import Screen4 from '../screens/Screen 4';
import Screen3 from '../screens/Screen3';
import Screen2 from '../screens/screen2';
import BottomTab from './Tab navigator';

const Stack = createNativeStackNavigator();

export default  function Navigaton() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen" component={BottomTab} />
        <Stack.Screen name="Screen2" component={Screen1} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
