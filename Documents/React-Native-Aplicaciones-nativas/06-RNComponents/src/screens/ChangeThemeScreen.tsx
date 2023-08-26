import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/themeContext';

const ChangeThemeScreen = () => {
    const { setDarkTheme, setLightTheme, theme } = useContext(ThemeContext);
    return (
        <View style={styles.globalMargin} >
            <HeaderTitle
                title="Theme"
            />
            <TouchableOpacity
                onPress={theme.dark ? setLightTheme : setDarkTheme}
                activeOpacity={0.8}
                style={{
                    backgroundColor: theme.colors.primary,
                    justifyContent: 'center',
                    width: 150,
                    height: 50,
                    borderRadius: 20,
                }}
            >
                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 22 }} >Light / Dark</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ChangeThemeScreen;
