import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../pages/MapScreen';
import PermissionsScreen from '../pages/PermissionsScreen';
import LoadingScreen from '../pages/LoadingScreen';
import { PermissionsContext } from '../context/PermissionsContext';

type RootStackParamList = {
    Map: undefined;
    Permissions: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigator() {
    const { permissions } = useContext(PermissionsContext);
    if (permissions.locateStatus === 'unavailable') {
        return <LoadingScreen />;
    }
    return (
        <Stack.Navigator
            initialRouteName="Permissions"
            screenOptions={{
                headerShown: false,
            }}
        >
            {
                permissions.locateStatus === 'granted' ?
                    <Stack.Screen name="Map" component={MapScreen} /> :
                    <Stack.Screen name="Permissions" component={PermissionsScreen} />
            }
        </Stack.Navigator>
    );
}
