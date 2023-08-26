/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';
type Props = StackScreenProps<RootStackParamList, 'PersonScreen'>;
const PersonScreen = ({ route, navigation }: Props) => {
    const { changeUsername } = useContext(AuthContext);
    useEffect(() => {
        navigation.setOptions({
            title: route.params.nombre,
        });
    }, []);
    useEffect(() => {
        changeUsername(route.params.nombre);
    }, []);
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title} >{JSON.stringify(route.params, null, 3)}</Text>
        </View>
    );
};

export default PersonScreen;
