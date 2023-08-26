import React, { useContext } from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { AuthContext } from '../context/AuthContext';

const ProtectedScreen = () => {
    const { user, token, logOut } = useContext(AuthContext);
    return (
        <View style={styles.container} >
            <Text style={styles.title} >ProtectedScreen</Text>
            <Button title="Logout" color="#5856D6" onPress={logOut} />
            <Text>{JSON.stringify(token, null ,5)}</Text>
            <Text>{JSON.stringify(user, null, 5)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
});

export default ProtectedScreen;
