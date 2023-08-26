/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, StyleProp, ViewStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { useEffect } from 'react';

interface Props {
    style?: StyleProp<ViewStyle>
    onDebounced: (value: string) => void
}

const SearchInput = ({ style, onDebounced }: Props) => {
    const [textValue, setTextValue] = useState('');
    const debouncedValue = useDebouncedValue(textValue, 1500);
    useEffect(() => {
        onDebounced(debouncedValue);
    }, [debouncedValue]);
    return (
        <View >
            <View style={[styles.textBackGround, style]} >
                <TextInput
                    style={styles.textInput}
                    placeholder="Search Pokemon"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />
                <Ionicons
                    size={30}
                    name="search-outline"
                    color="grey"
                    style={{
                        marginRight: 10,
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textBackGround: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        marginHorizontal: 10,
    },
});

export default SearchInput;
