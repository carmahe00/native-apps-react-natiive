import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import Navigator from './Navigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#5856D6',
                tabBarLabelStyle: {
                    marginBottom: (Platform.OS === 'ios' ? 0 : 10),
                },
                tabBarStyle: {
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    borderWidth: 0,
                    elevation: 0,
                    height: (Platform.OS === 'ios' ? 0 : 60),
                    position: 'absolute',
                    bottom: 0,
                },
                headerShown: false,
            }}
        >
            <Tab.Screen name="Navigator" component={Navigator}
                options={{
                    tabBarLabel: 'List',
                    tabBarIcon: ({ color, size }) => <Ionicons color={color} size={size} name="list-outline" />,
                }}
            />
            <Tab.Screen name="Search" component={Tab2Screen}
                options={{
                    tabBarLabel: 'Seacrh',
                    tabBarIcon: ({ color, size }) => <Ionicons color={color} size={size} name="search-outline" />,
                }}
            />
        </Tab.Navigator>
    );
};
