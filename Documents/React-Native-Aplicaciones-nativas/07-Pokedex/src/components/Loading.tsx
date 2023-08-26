import React from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';

const Loading = () => {
    return (
        <View
            style={styles.activiTyContainer}
        >
            <ActivityIndicator size="large" color="grey" />
            <Text>Loading...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    activiTyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Loading;
