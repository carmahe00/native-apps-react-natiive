import React from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import useFade from '../hooks/useFade';

const FadeScreen = () => {
    const { opacity, fadeIn, fadeOut } = useFade();
    return (
        <View style={styles.container} >
            <Animated.View
                style={{
                    backgroundColor: '#084F6A',
                    height: 150,
                    width: 150,
                    borderColor: '#fff',
                    borderWidth: 10,
                    opacity,
                    marginBottom: 10,
                }} />
            <Button
                title="FadeIn"
                onPress={() =>fadeIn()}
            />
            <Button
                title="FadeOut"
                onPress={() =>fadeOut()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FadeScreen;
