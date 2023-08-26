import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
    iconName: string
    onPress: () => void
    style?: StyleProp<ViewStyle>
}

const Fab = ({ iconName, onPress, style = {} }: Props) => {
    return (
        <View style={[styles.container, style]} >
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.blackButton}
            >
                <Ionicons
                    name={iconName}
                    color="#fff"
                    size={35}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    blackButton: {
        zIndex: 999,
        height: 50,
        width: 50,
        backgroundColor: '#000',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
});

export default Fab;
