import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradiantContext } from '../context/GradiantContext';
import useFade from '../hooks/useFade';

interface Porps {
    children: JSX.Element | JSX.Element[]
}

const GradiantBackground = ({ children }: Porps) => {
    const { colors, prevColors, setPrevMainColors } = useContext(GradiantContext);
    const { opacity, fadeIn, fadeOut } = useFade();
    useEffect(() => {
        fadeIn(() => {
            setPrevMainColors(colors);
            fadeOut();
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [colors]);
    return (
        <View style={styles.container} >
            <LinearGradient
                colors={[prevColors.primary, prevColors.secondary, '#FFF']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.7 }}
            />
            <Animated.View
                style={{ ...StyleSheet.absoluteFillObject, opacity }}
            >
                <LinearGradient
                    colors={[colors.primary, colors.secondary, '#FFF']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.5, y: 0.7 }}
                />
            </Animated.View>
            {
                children
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B4F6A',
    },
});

export default GradiantBackground;
