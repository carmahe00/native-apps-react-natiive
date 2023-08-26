import { useRef } from 'react';
import { Animated } from 'react-native';

export default () => {
    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;
    const fadeIn = (duration: number = 300) => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration,
                useNativeDriver: true,
            }).start();
    };
    const fadeOut = (duration: number = 300) => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
            }).start();
    };
    const startMovingPosition = (initPosition: number, duration: number = 700) => {
        position.setValue(initPosition);
        Animated.timing(
            position,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
                // easing: Easing.bounce,
            }).start();
    };
    return {
        fadeIn,
        fadeOut,
        position,
        opacity,
        startMovingPosition,
    };
};
