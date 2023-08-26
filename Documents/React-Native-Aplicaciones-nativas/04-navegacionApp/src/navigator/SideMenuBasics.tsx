import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';
export type RootDrawer = {
    StackNavigator: undefined
    SettingsScreen: undefined
}
const Drawer = createDrawerNavigator<RootDrawer>();
const SideMenuBasics = () => {
    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: { backgroundColor: '#6e6c6b' },
                drawerLabelStyle: { color: '#fff', fontWeight: 'bold' },
                headerShown: false,
                drawerType: width >= 600 ? 'permanent' : 'front',
            }}
            initialRouteName="StackNavigator"
        >
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Drawer.Navigator>
    );
};

export default SideMenuBasics;
