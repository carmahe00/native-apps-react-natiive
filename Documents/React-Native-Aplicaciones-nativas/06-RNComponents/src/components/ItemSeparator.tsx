import React, { useContext } from 'react';
import { View } from 'react-native';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/themeContext';

const ItemSeparator = () => {
    const { theme: { colors } } = useContext(ThemeContext);
    return (
        <View
            style={[styles.itemSeparator, { borderColor: colors.text }]}
        />
    );
};

export default ItemSeparator;
