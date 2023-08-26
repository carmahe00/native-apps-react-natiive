import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const WhiteLogo = () => {
    return (
        <View style={styles.container} >
            <Image
                style={styles.image}
                source={require('../assets/react-logo-white.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    image: {
        width: 110,
        height: 100,
    },
});

export default WhiteLogo;
