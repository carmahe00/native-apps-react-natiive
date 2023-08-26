import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

const AlbumsScreen = () => {
    const { logout, authState } = useContext(AuthContext);
    return (
        <View style={styles.globalMargin} >
            <Text style={styles.title} >ChatScreen</Text>
            {
                authState.isLoggedIn &&
                <Button
                    title="logout"
                    onPress={logout}
                />
            }
        </View>
    );
};

export default AlbumsScreen;
