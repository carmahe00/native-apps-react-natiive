import React from 'react';
import {View, StyleSheet } from 'react-native';


const Background = () => {
    return (
        <View
            style={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: '#5856D6',
        top: -380,
        width: 1000,
        height: 1200,
        transform: [
            {rotate: '-70deg'},
        ],
    },
});

export default Background;
