import React, { useContext, useState } from 'react';
import { StyleSheet, Animated, ActivityIndicator, View, StyleProp, ImageStyle } from 'react-native';

import useAnimation from '../hooks/useAnimation';
import { ThemeContext } from '../context/theme/themeContext';

interface Props {
    uri: string;
    style: StyleProp<ImageStyle>
}
const FadeInImage = ({ uri, style }: Props) => {
    const { fadeIn, opacity } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);
    const { theme: { colors } } = useContext(ThemeContext);
    const finishLoading = () => {
        setIsLoading(false);
        fadeIn(1000);
    };
    return (
        <View style={styles.container} >
            {
                isLoading &&
                <ActivityIndicator
                    color={colors.primary}
                    size="large"
                    style={styles.activityIndicator}
                />
            }
            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={[style, { opacity }]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    activityIndicator: {
        position: 'absolute',
    },
});

export default FadeInImage;
