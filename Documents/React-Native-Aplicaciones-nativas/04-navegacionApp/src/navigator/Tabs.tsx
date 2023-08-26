import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import StackNavigator from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TopTapNavigator from './TopTapNavigator';
export default function () {
    return Platform.OS === 'ios' ?
        <TabsIOS /> : <TabsAndroid />;
}

const BottomTabAndroid = createMaterialBottomTabNavigator();
const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            barStyle={{
                backgroundColor: colors.primary,
            }}
            sceneAnimationEnabled={true}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'home';
                            break;
                        case 'Tab2Screen':
                            iconName = 'book';
                            break;
                        case 'StackNavigator':
                            iconName = 'account-cog';
                            break;
                    }
                    return <MaterialCommunityIcons name={iconName} color={color} size={20} />;
                },
            })}
        >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
            <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTapNavigator} />
            <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    );
};

const BottomTabIOS = createBottomTabNavigator();
const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: '#fff',
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    color: colors.primary,
                    fontWeight: 'bold',
                    fontSize: 15,
                },
                tabBarIcon: ({ color }) => {
                    let iconName = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1';
                            break;
                        case 'Tab2Screen':
                            iconName = 'T2';
                            break;
                        case 'StackNavigator':
                            iconName = 'T3';
                            break;
                    }
                    return <Text style={{ color }} >{iconName}</Text>;
                },
            })}
        >
            {/* <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: ({ focused }) => <Text style={{ color: focused ? colors.primary : '#6e6c6b' }} >T1</Text> }} component={Tab1Screen} /> */}
            <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
            <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTapNavigator
            } />
            <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </BottomTabIOS.Navigator>
    );
};
