import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/themeContext';

interface Props {
    title: string
}

const HeaderTitle = ({ title = 'Opaciones de menú' }: Props) => {
    const { top } = useSafeAreaInsets();
    const { theme } = useContext(ThemeContext);

    return (
        <View style={{ marginTop: top + 10, marginBottom: 20 }} >
            <Text style={{ ...styles.title, color: theme.colors.text }} >{title}</Text>
        </View>);

};

export default HeaderTitle;
