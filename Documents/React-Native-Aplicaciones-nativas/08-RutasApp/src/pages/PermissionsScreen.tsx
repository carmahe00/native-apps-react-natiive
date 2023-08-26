import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BlackButton from '../components/BlackButton';
import { PermissionsContext } from '../context/PermissionsContext';

const PermissionsScreen = () => {
    const { permissions, askLocationPermission } = useContext(PermissionsContext);
    return (
        <View style={styles.container} >
            <Text style={styles.title} >PermissionsScreen</Text>
            <BlackButton
                title="Permissions"
                onPress={askLocationPermission}
            />
            <Text>
                {JSON.stringify(permissions, null, 5)}
            </Text>
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
        width: 200,
        fontSize: 18,
        textAlign: 'center',
    },
});

export default PermissionsScreen;
