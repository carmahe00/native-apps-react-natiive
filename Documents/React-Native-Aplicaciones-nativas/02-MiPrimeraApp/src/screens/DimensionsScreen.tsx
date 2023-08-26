import React from 'react';
import { View, StyleSheet, Text, useWindowDimensions } from 'react-native';

// const { height, width } = Dimensions.get('window');
const DimensionsScreen = () => {
    const { height, width } = useWindowDimensions();
    return (
        <View style={styles.container} >

            <View style={{ ...styles.cajaMorada, width: width * 0.5 }} />
            <View style={styles.cajaNaranja} />

            <Text style={styles.title} >W: {width}    H: {height}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        flex: 0.5,
        borderRadius: 5,
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
        borderRadius: 5,
        flex: 0.5,
    },
    title: {
        textAlign: 'center',
    },
});

export default DimensionsScreen;
