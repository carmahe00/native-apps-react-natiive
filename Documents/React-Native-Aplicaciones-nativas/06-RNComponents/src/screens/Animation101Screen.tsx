import React, { useContext } from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import useAnimation from '../hooks/useAnimation';
import { ThemeContext } from '../context/theme/themeContext';

const Animation101Screen = () => {
    const { theme: { colors } } = useContext(ThemeContext);
    const { opacity, fadeIn, fadeOut, position, startMovingPosition } = useAnimation();
    return (
        <View style={styles.contaner} >
            <Animated.View style={[styles.purpleBox, {
                opacity, transform: [{
                    translateX: position,
                }],
                backgroundColor: colors.primary,
            }]} />
            <Button title="FadeIn" onPress={() => {
                fadeIn();
                startMovingPosition(100);
            }}
                color={colors.primary}
            />
            <Button title="FadeOut" onPress={() => fadeOut()} color={colors.primary} />
        </View>
    );
};

const styles = StyleSheet.create({
    contaner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        height: 150,
        width: 150,
        marginBottom: 20,
    },
});

export default Animation101Screen;
