/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, Platform, KeyboardAvoidingView, TouchableOpacity, Keyboard, TextInput, Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { loginStyles } from '../theme/loginTheme';
import WhiteLogo from '../components/WhiteLogo';
import { RootStackParamList } from '../routes/Navigator';
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../context/AuthContext';

type Props = StackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen = ({ navigation }: Props) => {
    const { signUp, errorMessage, removeError } = useContext(AuthContext);
    const { email, password, name, onChange } = useForm({
        name: '',
        email: '',
        password: '',
    });
    const onRegister = () => {
        Keyboard.dismiss();
        signUp({correo: email, password, nombre: name});
    };
    useEffect(() => {
        if (errorMessage.length === 0) { return; }
        Alert.alert('Error Register', errorMessage, [
            {
                text: 'Ok.',
                onPress: removeError,
            },
        ]);
    }, [errorMessage]);
    return (
        <>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={loginStyles.formContainer} >
                    <WhiteLogo />
                    <Text style={loginStyles.title} >Register</Text>
                    <Text style={loginStyles.label} >Name: </Text>
                    <TextInput
                        placeholder="Insert your Name"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="default"
                        underlineColorAndroid="white"
                        style={[loginStyles.inputField, Platform.OS === 'ios' && loginStyles.inputFieldIOS]}
                        selectionColor="white"
                        onChangeText={value => onChange(value, 'name')}
                        onSubmitEditing={onRegister}
                        value={name}
                        autoCapitalize="words"
                        autoCorrect={false}
                    />
                    <Text style={loginStyles.label} >Email: </Text>
                    <TextInput
                        placeholder="Insert your Email"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={[loginStyles.inputField, Platform.OS === 'ios' && loginStyles.inputFieldIOS]}
                        selectionColor="white"
                        onChangeText={value => onChange(value, 'email')}
                        onSubmitEditing={onRegister}
                        value={email}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <Text style={loginStyles.label} >Password: </Text>
                    <TextInput
                        placeholder="*******"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        secureTextEntry
                        underlineColorAndroid="white"
                        style={[loginStyles.inputField, Platform.OS === 'ios' && loginStyles.inputFieldIOS]}
                        selectionColor="white"
                        onChangeText={value => onChange(value, 'password')}
                        value={password}
                        autoCapitalize="none"
                        onSubmitEditing={onRegister}
                        autoCorrect={false}
                    />
                    <View style={loginStyles.buttonContainer} >
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.button}
                            onPress={onRegister}
                        >
                            <Text style={loginStyles.buttonText} >Sign Up</Text>
                        </TouchableOpacity>
                    </View>



                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.replace('Login')}
                        style={loginStyles.buttonRegister}
                    >

                        <Text style={loginStyles.buttonText} >Sign In</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5856D6',
    },
});

export default RegisterScreen;
