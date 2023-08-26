import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import BottonCalc from '../components/BottonCalc';
import { useCalculadora } from '../hooks/useCalculadora';

const CalculatorScreen = () => {
    const { numeroAnterior, armarNumero, numero, clean, positiveNegative, btnDelete, btnDividir, btnMultiplicar, btnRestar, btnSumar, calcular } = useCalculadora();
    return (
        <View style={styles.calculadoraContainer} >
            {
                numeroAnterior !== '0' && <Text style={styles.smallResult} >{numeroAnterior}</Text>
            }
            <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit >{numero}</Text>
            {/* Fila Botones */}
            <View style={styles.fila} >
                <BottonCalc text="C" color='#9B9B9B' action={clean} />
                <BottonCalc text="+/-" color='#9B9B9B' action={positiveNegative} />
                <BottonCalc text="del" color='#9B9B9B' action={btnDelete} />
                <BottonCalc text="/" color='#FF9427' action={btnDividir} />
            </View>
            {/* Fila Botones */}
            <View style={styles.fila} >
                <BottonCalc text="7" action={armarNumero} />
                <BottonCalc text="8" action={armarNumero} />
                <BottonCalc text="9" action={armarNumero} />
                <BottonCalc text="X" color='#FF9427' action={btnMultiplicar} />
            </View>
            {/* Fila Botones */}
            <View style={styles.fila} >
                <BottonCalc text="4" action={armarNumero} />
                <BottonCalc text="5" action={armarNumero} />
                <BottonCalc text="6" action={armarNumero} />
                <BottonCalc text="-" color='#FF9427' action={btnRestar} />
            </View>
            {/* Fila Botones */}
            <View style={styles.fila} >
                <BottonCalc text="1" action={armarNumero} />
                <BottonCalc text="2" action={armarNumero} />
                <BottonCalc text="3" action={armarNumero} />
                <BottonCalc text="+" color='#FF9427' action={btnSumar} />
            </View>
            {/* Fila Botones */}
            <View style={styles.fila} >
                <BottonCalc text="0" widen action={armarNumero} />
                <BottonCalc text="." action={armarNumero} />
                <BottonCalc text="=" color='#FF9427' action={calcular} />
            </View>
        </View>
    );
};

export default CalculatorScreen;
