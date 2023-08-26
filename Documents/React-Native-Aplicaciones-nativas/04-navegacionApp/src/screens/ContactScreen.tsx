import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

const ContactScreen = () => {
    const { signIn, authState } = useContext(AuthContext);
    return (
        <View style={styles.globalMargin} >
            <Text style={styles.title} >ChatScreen</Text>
            {
                !authState.isLoggedIn &&
                <Button
                    title="Sign In"
                    onPress={signIn}
                />
            }
        </View>
    );
};

export default ContactScreen;
