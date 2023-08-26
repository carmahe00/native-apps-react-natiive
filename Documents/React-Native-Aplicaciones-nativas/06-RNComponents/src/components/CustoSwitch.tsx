import React, { useContext, useState } from 'react';
import { Platform, Switch } from 'react-native';
import { ThemeContext } from '../context/theme/themeContext';

interface Props {
    isOn: boolean
    onChange?: (value: boolean) => void
}

const CustoSwitch = ({ isOn, onChange }: Props) => {
    const [isEnabled, setIsEnabled] = useState(isOn);
    const { theme: { colors } } = useContext(ThemeContext);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange && onChange(!isEnabled);
    };
    return (
        <Switch
            trackColor={{ false: '#D9D9DB', true: colors.primary }}
            thumbColor={Platform.OS === 'android' ? 'white' : ''}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
};

export default CustoSwitch;
