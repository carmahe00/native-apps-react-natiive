import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Page1Screen from '../screens/Page1Screen';
import Page2Screen from '../screens/Page2Screen';
import Page3Screen from '../screens/Page3Screen';
import PersonScreen from '../screens/PersonScreen';

export type RootStackParamList = {
  Page1Screen: undefined
  Page2Screen: undefined
  Page3Screen: undefined
  PersonScreen: { id: number, nombre: string }
}

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Page1Screen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        headerTitleStyle: { color: '#6e6c6b' },
        headerTitleAlign: 'center',
        cardStyle: { backgroundColor: '#fff' },
      }}
    >
      <Stack.Screen name="Page1Screen" options={{ title: 'Page1' }} component={Page1Screen} />
      <Stack.Screen name="Page2Screen" options={{ title: 'Page2' }} component={Page2Screen} />
      <Stack.Screen name="Page3Screen" options={{ title: 'Page3' }} component={Page3Screen} />
      <Stack.Screen name="PersonScreen" options={{ title: 'Person' }} component={PersonScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;


