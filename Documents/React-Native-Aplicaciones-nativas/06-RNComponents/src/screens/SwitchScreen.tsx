import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import CustoSwitch from '../components/CustoSwitch';
import { ThemeContext } from '../context/theme/themeContext';

const SwitchScreen = () => {
    const { theme: { colors } } = useContext(ThemeContext);
    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    });
    const { isActive, isHappy, isHungry } = state;
    const onChange = (value: boolean, field: keyof typeof state) => {
        setState({
            ...state,
            [field]: value,
        });
    };
    return (
        <View style={styles.container} >
            <HeaderTitle
                title="Switches"
            />
            <View style={styles.switchRow} >
                <Text style={[styles.switchText,  {color: colors.text}]} >isActive</Text>
                <CustoSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
            </View>
            <View style={styles.switchRow} >
                <Text style={[styles.switchText,  {color: colors.text}]} >isHappy</Text>
                <CustoSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
            </View>
            <View style={styles.switchRow} >
                <Text style={[styles.switchText,  {color: colors.text}]} >isHungry</Text>
                <CustoSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
            </View>
            <Text style={[styles.switchText,  {color: colors.text}]} >
                {JSON.stringify(state, null, 5)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
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

export default SwitchScreen;
