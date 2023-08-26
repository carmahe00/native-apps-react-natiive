import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import { styles } from '../theme/appTheme';
/* interface Props extends StackScreenProps<any, any> { } */
interface Props extends DrawerScreenProps<any, any> { }
const Page1Screen = ({ navigation }: Props) => {
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => <Button title="Menu" onPress={() => navigation.toggleDrawer() } />,
        });
    }, [navigation]);
    return (
        <View style={styles.globalMargin} >
            <Text style={styles.title} >Page1Screen</Text>
            <Button title="Ir a la página 2" onPress={() => navigation.navigate('Page2Screen')} />
            <Text style={{marginVertical: 20, fontSize: 18}} >Navegar con argumentos</Text>
            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity
                    style={[styles.btnBig, { backgroundColor: '#5856D6' }]}
                    onPress={() => navigation.navigate('PersonScreen', {
                        id: 1,
                        nombre: 'Pedro',
                    })}
                >
                    <Text style={styles.btnBigText} >Pedro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btnBig, { backgroundColor: '#FF9427' }]}
                    onPress={() => navigation.navigate('PersonScreen', {
                        id: 2,
                        nombre: 'Maria',
                    })}
                >
                    <Text style={styles.btnBigText} >Maria</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Page1Screen;
