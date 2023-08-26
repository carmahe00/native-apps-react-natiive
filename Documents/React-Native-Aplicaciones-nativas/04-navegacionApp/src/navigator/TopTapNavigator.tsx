import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export type RootStackParamList = {
    Home: undefined
    Contact: undefined
    Albums: undefined
  }
const Tab = createMaterialTopTabNavigator<RootStackParamList>();
const TopTapNavigator = () => {
    const { top } = useSafeAreaInsets();
    return (
        <Tab.Navigator
            style={{
                padding: top,
            }}
            sceneContainerStyle={{
                backgroundColor: '#fff',
            }}
            screenOptions={({route}) =>({
                tabBarStyle: {
                    backgroundColor: '#fff',
                    elevation: 0,
                    shadowColor: 'transparent', // IOS
                },
                tabBarPressColor: colors.primary,
                tabBarIcon: ({ color }) => {
                    let iconName = '';
                    switch (route.name) {
                        case 'Albums':
                            iconName = 'image-album';
                            break;
                        case 'Contact':
                            iconName = 'account-box';
                            break;
                        case 'Home':
                            iconName = 'home';
                            break;
                    }
                    return <MaterialCommunityIcons name={iconName} color={color} size={20} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={ChatScreen} />
            <Tab.Screen name="Contact" component={ContactScreen} />
            <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator>
    );
};

export default TopTapNavigator;
