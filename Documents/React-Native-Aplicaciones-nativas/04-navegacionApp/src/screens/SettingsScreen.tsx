import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles, colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

const SettingsScreen = () => {
    const insets = useSafeAreaInsets(); //Optiene el area segura(alto, bajor, izq, drcha)
    const { authState } = useContext(AuthContext);
    return (
        <View style={{ marginTop: insets.top, ...styles.globalMargin }} >
            <Text style={styles.title} >Settings Screen</Text>
            <Text>{JSON.stringify(authState, null, 4)}</Text>
            {
                authState.favoriteIcon && <Ionicons name={authState.favoriteIcon} color={colors.primary} size={70} />
            }
        </View>
    );
};

export default SettingsScreen;
