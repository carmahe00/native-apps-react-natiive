import React from 'react';
import {View, StyleSheet} from 'react-native';

const TaskScreen = () => {
    return (
        <View style={styles.container} >
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
            <View style={styles.cajaAzul} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28425B',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cajaMorada: {
        width: 100,
        borderRadius: 10,
        borderColor: '#fff',
        backgroundColor: '#5856D6',
    },
    cajaNaranja: {
        width: 100,
        borderRadius: 10,
        borderColor: '#fff',
        backgroundColor: '#F0A23B',
    },
    cajaAzul: {
        width:100,
        borderRadius: 10,
        borderColor: '#fff',
        backgroundColor: '#28C4D9',
    },
});

export default TaskScreen;
