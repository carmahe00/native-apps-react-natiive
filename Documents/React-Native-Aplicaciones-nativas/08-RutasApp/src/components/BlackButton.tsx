import React from 'react';
import { TouchableOpacity, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';

interface Props {
    title: string
    onPress: () => void
    style?: StyleProp<ViewStyle>
}

const BlackButton = ({ style, title, onPress }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={[style, styles.blackBotton]}
            onPress={onPress}
        >
            <Text
                style={styles.buttonText}
            > {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    blackBotton: {
        height: 45,
        backgroundColor: '#000',
        borderRadius: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default BlackButton;
