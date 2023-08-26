import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Maps } from '../components/Maps';

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <Maps />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
export default MapScreen;
