import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback, Text, Platform, TouchableOpacity } from 'react-native';

interface fabProps {
    onPress: () => void
    isRight?: boolean
}

const Fab = ({ isRight = true, onPress }: fabProps) => {
    return (
        Platform.OS === 'android' ?
            <View
                style={[styles.fabLocation, isRight ? styles.right : styles.left]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#000', false, 60)}
                >
                    <View style={styles.fab} >
                        <Text style={styles.fabText}> {isRight ? '+1' : '-1'}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View> :
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={[styles.fabLocation, isRight ? styles.right : styles.left]}
            >
                <View style={styles.fab} >
                    <Text style={styles.fabText}> {isRight ? '+1' : '-1'}</Text>
                </View>
            </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 10,
        zIndex: 999,
        overflow: 'hidden',
        borderRadius: 100,
    },
    right: {
        right: 25,
    },
    left: {
        left: 25,
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2,
    },
    fabText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});

export default Fab;
