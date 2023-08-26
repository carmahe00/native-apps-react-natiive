import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    text: string
    color?: string
    widen?: boolean
    action: (numeroTexto: string) => void
}
const BottonCalc = ({ text, color = '#2D2D2D', widen = false, action }: Props) => {
    return (
        <TouchableOpacity onPress={() => action(text)} >
            <View style={[styles.botton, { backgroundColor: color, width: widen ? 140 : 60 }]} >
                <Text style={[styles.bottonText, { color: (color === '#9B9B9B') ? 'black' : 'white' }]} >{text}</Text>
            </View>
        </TouchableOpacity>

    );
};

export default BottonCalc;
