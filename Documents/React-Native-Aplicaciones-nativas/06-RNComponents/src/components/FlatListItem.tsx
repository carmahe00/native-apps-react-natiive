import React, { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { MenuItem } from '../interfaces/appInterfaces';
import { RootStackParamList } from '../routes/Navigator';
import { ThemeContext } from '../context/theme/themeContext';

interface Props {
    menuItem: MenuItem
}

type FlatListItemNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const FlatListItem = ({ menuItem }: Props) => {
    const { theme: { colors } } = useContext(ThemeContext);
    const navigation = useNavigation<FlatListItemNavigationProp>();
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={styles.container} >
                <Ionicons
                    name={menuItem.icon}
                    color={colors.primary}
                    size={23}
                />
                <Text style={[styles.itemText, {color: colors.text}]} >{menuItem.name}</Text>
                <View style={{ flex: 1 }} />
                <Ionicons
                    name="chevron-forward-outline"
                    color={colors.primary}
                    size={23}
                />
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 18,
        fontSize: 18,
    },
});

export default FlatListItem;
