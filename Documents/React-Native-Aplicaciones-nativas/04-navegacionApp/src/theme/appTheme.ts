import { StyleSheet } from "react-native";
export const colors = {
    primary: '#5856D6',
};
export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
    },
    btnBig: {
        width: 100,
        height: 100,
        backgroundColor: '#e02407',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    btnBigText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    menuContainer: {
        marginVertical: 20,
        marginHorizontal: 20,
    },
    menuBotton: {
        marginVertical: 10,
    },
    menuText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});
