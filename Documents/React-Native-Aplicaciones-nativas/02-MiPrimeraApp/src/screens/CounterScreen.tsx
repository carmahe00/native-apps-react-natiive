import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fab from '../components/Fab';

const CounterScreen = () => {
    const [contador, setContador] = useState(10);
    return (
        <View style={styles.container} >
            <Text style={styles.title} >
                Contador: {contador}
            </Text>
            <Fab onPress={() =>setContador(contador + 1)} />
            <Fab onPress={() =>setContador(contador - 1)} isRight={false} />
        </View>
    );
};

export default CounterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center',
    },
    title: {
        textAlign: 'center', fontSize: 40, top: -15,
    },
    buttonIncrease: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 5,
    },
});
