/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, Alert } from 'react-native';
import Background from '../components/Background';
import WhiteLogo from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/Navigator';
import { AuthContext } from '../context/AuthContext';

type Props = StackScreenProps<RootStackParamList, 'Login'>

const LoginScreen = ({ navigation }: Props) => {
    const { signIn, errorMessage, removeError } = useContext(AuthContext);
    const { email, password, onChange } = useForm({
        email: '',
        password: '',
    });
    const onLogin = () => {
        Keyboard.dismiss();
        signIn({ correo: email, password });
    };
    useEffect(() => {
        if (errorMessage.length === 0) { return; }
        Alert.alert('Error', errorMessage, [
            {
                text: 'Ok.',
                onPress: removeError,
            },
        ]);
    }, [errorMessage]);
    return (
        <>
            <Background />
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={loginStyles.formContainer} >
                    <WhiteLogo />
                    <Text style={loginStyles.title} >Login</Text>
                    <Text style={loginStyles.label} >Email: </Text>
                    <TextInput
                        placeholder="Insert your Email"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={[loginStyles.inputField, Platform.OS === 'ios' && loginStyles.inputFieldIOS]}
                        selectionColor="white"
                        onChangeText={value => onChange(value, 'email')}
                        onSubmitEditing={onLogin}
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
                        onSubmitEditing={onLogin}
                        autoCorrect={false}
                    />
                    <View style={loginStyles.buttonContainer} >
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.button}
                            onPress={onLogin}
                        >
                            <Text style={loginStyles.buttonText} >Sign In</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={loginStyles.newUserContainer} >
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.replace('Register')}>

                            <Text style={loginStyles.buttonText} >Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default LoginScreen;
