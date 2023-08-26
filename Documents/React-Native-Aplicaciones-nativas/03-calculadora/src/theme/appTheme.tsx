import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },
    result: {
        color: '#fff',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 5,
    },
    smallResult: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    botton: {
        height: 60,
        width: 60,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    bottonText: {
        textAlign: 'center',
        color: 'white',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
});
