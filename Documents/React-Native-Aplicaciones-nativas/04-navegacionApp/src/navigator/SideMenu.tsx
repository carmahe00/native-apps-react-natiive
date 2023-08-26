import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import Tabs from './Tabs';
import SettingsScreen from '../screens/SettingsScreen';
import { Image, View, useWindowDimensions, TouchableOpacity, Text } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();
const SideMenu = () => {
    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: { backgroundColor: '#6e6c6b' },
                drawerLabelStyle: { color: '#fff', fontWeight: 'bold' },
                headerShown: false,
                drawerType: width >= 600 ? 'permanent' : 'front',
            }}
            initialRouteName="Tabs"
            drawerContent={(props) => <InternalMenu {...props} />}
        >
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
};
const InternalMenu = ({ navigation }: DrawerContentComponentProps) => {
    return <DrawerContentScrollView>
        <View style={styles.avatarContainer} >
            <Image
                source={{
                    uri: 'https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/77202336_2562214303877457_9023012310712582144_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHFXL7dHnUXeTHbwWXzPzbgV7tySmcxVThXu3JKZzFVOPT74GktXKpc59hP3HjHozLW_afvfBInjJ0dHbZ7W00-&_nc_ohc=tQ7BByG0o8QAX_z_djj&_nc_ht=scontent-bog1-1.xx&oh=00_AT9RqC0fM6VpRAqvM1-LrbihkzUuVY_kikNl-LbBlBlo2Q&oe=628BB5DD',
                }}
                style={styles.avatar}
            />
        </View>
        <View style={styles.menuContainer} >
            <TouchableOpacity style={styles.menuBotton} onPress={() => navigation.navigate('Tabs')} >
                <Text style={styles.menuText} >Navegación Stack</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuBotton} onPress={() => navigation.navigate('SettingsScreen')} >
                <Text style={styles.menuText} >Settings</Text>
            </TouchableOpacity>
        </View>
    </DrawerContentScrollView>;
};
export default SideMenu;
