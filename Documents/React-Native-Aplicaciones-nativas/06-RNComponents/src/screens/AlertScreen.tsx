import React from 'react';
import { View, Alert, Button, Platform } from 'react-native';
import prompt from 'react-native-prompt-android';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

const AlertScreen = () => {
    const showAlert = () =>
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            {
                cancelable: true,
            }
        );
    const showPropt = () => {
        Platform.OS === 'ios' ?
            Alert.prompt('¿Está seguro?', 'Esta acción no se puede revertir', (valor) => console.log(`info: ${valor}`), 'default', 'Hola Mundo', 'email-address') :
            prompt(
                'Enter password',
                'Enter your password to claim your $1.5B in lottery winnings',
                [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
                ],
                {
                    type: 'secure-text',
                    cancelable: false,
                    defaultValue: 'test',
                    placeholder: 'placeholder',
                }
            );
    };
    return (
        <View style={styles.globalMargin} >
            <HeaderTitle
                title="Alerts"
            />
            <Button title="Mostrar alerta" onPress={showAlert} />
            <View style={{ height: 10 }} />
            <Button title="Propmt Ios" onPress={showPropt} />
        </View>
    );
};

export default AlertScreen;
