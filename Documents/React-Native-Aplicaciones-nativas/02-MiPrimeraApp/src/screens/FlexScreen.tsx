import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const FlexScreen = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2} >Caja 2</Text>
            <Text style={styles.caja3} >Caja 3</Text>
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2} >Caja 2</Text>
            <Text style={styles.caja3} >Caja 3</Text>
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2} >Caja 2</Text>
            <Text style={styles.caja3} >Caja 3</Text>
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2} >Caja 2</Text>
            <Text style={styles.caja3} >Caja 3</Text>
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2} >Caja 2</Text>
            <Text style={styles.caja3} >Caja 3</Text>
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2} >Caja 2</Text>
            <Text style={styles.caja3} >Caja 3</Text>
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2} >Caja 2</Text>
            <Text style={styles.caja3} >Caja 3</Text>
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2} >Caja 2</Text>
            <Text style={styles.caja3} >Caja 3</Text>
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2} >Caja 2</Text>
            <Text style={styles.caja3} >Caja 3</Text>
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2} >Caja 2</Text>
            <Text style={styles.caja3} >Caja 3</Text>
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2} >Caja 2</Text>
            <Text style={styles.caja3} >Caja 3</Text>
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2} >Caja 2</Text>
            <Text style={styles.caja3} >Caja 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    caja1: {
        borderColor: '#fff',
        borderWidth: 2,
        fontSize: 30,
    },
    caja2: {
        borderColor: '#fff',
        borderWidth: 2,
        fontSize: 30,
    },
    caja3: {
        borderColor: '#fff',
        borderWidth: 2,
        fontSize: 30,
    },
});

export default FlexScreen;
