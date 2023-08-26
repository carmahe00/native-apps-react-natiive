import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.title} >Box Object Model</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
    },
    title: {
        paddingHorizontal: 50,
        paddingVertical: 20,
        marginHorizontal: 10,
        fontSize: 20,
        borderWidth: 10,
        textAlign: 'center',
    },
});

export default BoxObjectModelScreen;
