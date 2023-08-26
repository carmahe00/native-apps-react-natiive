import React, { useState } from 'react';
import { Modal, View, StyleSheet, Button, Text } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

const ModalScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.globalMargin} >
            <HeaderTitle title="Modal Screen" />
            <Button
                title="Open Modal"
                onPress={() => setModalVisible(true)}
            />
            <Modal
                animationType="fade"
                hardwareAccelerated
                transparent
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={stylesModal.container} >
                    <View style={stylesModal.containerModal} >
                        <HeaderTitle title="Modal Screen" />
                        <Text style={stylesModal.title} >Cuerpo del modal</Text>
                        <Button
                            title="Cerrar"
                            onPress={() => setModalVisible(false)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const stylesModal = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerModal: {
        width: 200,
        height: 200,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        elevation: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '300',
        marginBottom: 20,
    },
});

export default ModalScreen;
