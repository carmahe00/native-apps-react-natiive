import React from 'react';
import {View, StyleSheet} from 'react-native';

const PositionScreen = () => {
    return (
        <View style={styles.container} >
            <View style={styles.cajaVerde} />
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth:  10,
        borderColor: '#fff',
        position: 'absolute',
        right: 0,
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth:  10,
        borderColor: '#fff',
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
    cajaVerde: {
        /* width: 100,
        height: 100, */
        backgroundColor: 'green',
        borderWidth:  10,
        borderColor: '#fff',
        ...StyleSheet.absoluteFillObject,
    },
});

export default PositionScreen;
