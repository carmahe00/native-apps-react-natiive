import { useRef, useState } from 'react';

enum Operadores {
    sumar, restar, multiplicar, dividir
}
export const useCalculadora = () =>{
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const ultimaOperacion = useRef<Operadores>();
    const clean = () => {
        setNumero('0');
        setNumeroAnterior('0');
    };
    const armarNumero = (numeroTexto: string) => {
        // No aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') { return; }
        if (numero.startsWith('0') || numero.startsWith('-0')) {
            // Punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);
                // Evaluar si es otro cero, y hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);
                // Evaluar si es diferente de cero y no tine punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numeroTexto);
            } else {
                setNumero(numero + numeroTexto);
            }
        }
        else { setNumero(numero + numeroTexto); }

    };
    const positiveNegative = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero);
        }
    };
    const btnDelete = () => {
        if (numero.length === 1 || numero.startsWith('-') && numero.length === 2) { return setNumero('0'); }
        setNumero(numero.slice(0, -1));
    };
    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }
        setNumero('0');
    };
    const btnDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    };
    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    };
    const btnRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    };
    const btnSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    };
    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);
        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;
            case Operadores.restar:
                setNumero(`${num2 - num1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;
            case Operadores.dividir:
                num2 === 0 && setNumero('error');
                setNumero(`${num2 / num1}`);
                break;
        }
        setNumeroAnterior('0');
    };
    return {
        numeroAnterior,
        positiveNegative,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
        clean,
        armarNumero,
        numero,
    };
};
