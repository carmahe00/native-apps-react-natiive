import React, { useRef } from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native';

const Animation102Screen = () => {
    const pan = useRef(new Animated.ValueXY()).current;
    console.log(pan.x);
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x, // x,y are Animated.Value
                dy: pan.y,
            },
        ],
        {
            useNativeDriver: false,
        }),
        onPanResponderRelease: () => {
            Animated.spring(
                pan, // Auto-multiplexed
                { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
            ).start();
        },
    });
    return (
        <View style={styles.contaner} >
            <Animated.View style={[pan.getLayout(), styles.purpleBox]} {...panResponder.panHandlers} />
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
        backgroundColor: '#61dafb',
        width: 80,
        height: 80,
        borderRadius: 4,
    },
});

export default Animation102Screen;
