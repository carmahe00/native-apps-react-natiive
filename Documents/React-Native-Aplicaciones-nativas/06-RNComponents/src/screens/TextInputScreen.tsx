import React, { useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';

import { styles } from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import useForm from '../hooks/useForm';
import CustoSwitch from '../components/CustoSwitch';
import { ThemeContext } from '../context/theme/themeContext';


const TextInputScreen = () => {
    const { theme: { colors } } = useContext(ThemeContext);
    const { onChange, name, email, phone, form, isSubsribe } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubsribe: false,
    });
    return (
        <KeyboardAvoidingView
            enabled
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin} >
                        <HeaderTitle
                            title="TextInputs"
                        />
                        <TextInput
                            style={[stylesScreen.textInput, { color: colors.text, borderColor: colors.text }]}
                            placeholder="Ingrese su nombre"
                            placeholderTextColor={colors.primary}
                            autoCorrect={false}
                            autoCapitalize="words"
                            value={name}
                            onChangeText={(value) => onChange(value, 'name')}
                        />
                        <TextInput
                            style={[stylesScreen.textInput, { color: colors.text, borderColor: colors.text }]}
                            placeholder="Ingrese su email"
                            placeholderTextColor={colors.primary}
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType="email-address"
                        />
                        {/* Ejemplo */}
                        <View style={stylesScreen.switchRow} >
                            <Text style={[stylesScreen.switchText, {color: colors.text}]} >Subscribirme</Text>
                            <CustoSwitch isOn={isSubsribe} onChange={(value) => onChange(value, 'isSubsribe')} />
                        </View>
                        <HeaderTitle
                            title={JSON.stringify(form, null, 5)}
                        />
                        <HeaderTitle
                            title={JSON.stringify(form, null, 5)}
                        />
                        <TextInput
                            style={[stylesScreen.textInput, { color: colors.text, borderColor: colors.text }]}
                            placeholder="Ingrese su teléfono"
                            autoCorrect={false}
                            value={phone}
                            placeholderTextColor={colors.primary}
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType="phone-pad"
                        />
                        <View style={{ height: 100 }} />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const stylesScreen = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        height: 40,
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.5)',
        marginVertical: 12,
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    switchText: {
        fontSize: 25,
    },
});

export default TextInputScreen;
