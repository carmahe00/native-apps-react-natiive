/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, Image, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductStackParams } from '../routes/ProductsNavigator';
import { useCategories } from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { ProductsContext } from '../context/ProductsContext';

type Props = StackScreenProps<ProductStackParams, 'ProductScreen'>

const ProductScreen = ({ route, navigation }: Props) => {
    const { id, name = '' } = route.params;
    const { categories } = useCategories();
    const [tempUrl, setTempUrl] = useState<string>();
    const { loadProductById, addProducts, updateProduct, deleteProduct, uploadImage } = useContext(ProductsContext);
    const { _id, categoriaId, nombre, img, onChange, setFormValue } = useForm({
        _id: id,
        categoriaId: '',
        nombre: name,
        img: '',
    });
    useEffect(() => {
        navigation.setOptions({
            title: nombre !== '' ? nombre : 'Nuevo Producto',
        });
    }, [nombre]);
    useEffect(() => {
        loadProduct();
    }, []);
    const loadProduct = async () => {
        if (!id) { return; }
        const product = await loadProductById(id);
        setFormValue({
            _id: id,
            categoriaId: product.categoria._id,
            img: product.img || '',
            nombre,
        });
    };
    const saveOrUpdate = async () => {
        if (id) {
            updateProduct(categoriaId, nombre, id);
        } else {
            if (!categories) {
                return Alert.alert('Error', 'Ninguna categoria selecionada');
            }
            const tempCategoryId = categoriaId || categories[0]._id;
            const newProduct = await addProducts(tempCategoryId, nombre);
            onChange(newProduct._id, '_id');
        }
    };
    const takePhoto = () => {
        launchCamera(
            {
                cameraType: 'back',
                mediaType: 'photo',
                quality: 0.5,
            },
            resp => {
                if (resp.didCancel) { return; }
                if (!resp.assets) { return; }
                if (!_id) { return; }
                console.log(resp);
                setTempUrl(resp.assets[0].uri);
                uploadImage(resp, _id);
            },
        );
    };
    const takePhotoFromGalery = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                quality: 0.5,
            },
            resp => {
                if (resp.didCancel) { return; }
                if (!resp.assets) { return; }
                if (!_id) { return; }
                console.log(resp);
                setTempUrl(resp.assets[0].uri);
                uploadImage(resp, _id);
            },
        );
    };
    return (
        <View style={styles.container} >
            <ScrollView>
                <Text style={styles.label} >Product Name:</Text>
                <TextInput
                    placeholder="product"
                    placeholderTextColor="rgba(0,0,0,0.4)"
                    value={nombre}
                    style={styles.textInput}
                    onChangeText={value => onChange(value, 'nombre')}
                />
                <Text style={styles.label} >Categoría:</Text>
                <Picker
                    selectedValue={categoriaId}
                    onValueChange={(itemValue) =>
                        onChange(itemValue, 'categoriaId')
                    }
                >
                    {
                        categories?.map(category => (
                            <Picker.Item
                                label={category.nombre}
                                value={category._id}
                                key={category._id}
                            />
                        ))
                    }

                </Picker>
                <Button
                    title="Guardar"
                    onPress={saveOrUpdate}
                    color="#5856D6"
                />
                {
                    _id && (
                        <View style={styles.containerBotton} >
                            <Button
                                onPress={takePhoto}
                                color="#5856D6"
                                title="Cámara"
                            />
                            <View style={styles.separator} />
                            <Button
                                onPress={takePhotoFromGalery}
                                color="#5856D6"
                                title="Galería"
                            />
                            <View style={styles.separator} />
                            <Button
                                onPress={() => deleteProduct(_id)}
                                color="#5856D6"
                                title="Eliminar"
                            />
                        </View>
                    )
                }

                {
                    img.length > 0 && (
                        <Image
                            source={{ uri: img }}
                            style={styles.image}
                        />
                    )
                }
                {
                    tempUrl && (
                        <Image
                            source={{ uri: tempUrl }}
                            style={styles.image}
                        />
                    )
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 20,
    },
    label: {
        fontSize: 20,
    },
    textInput: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderColor: 'rgba(0,0,0,0.2)',
        height: 45,
        marginVertical: 5,
    },
    containerBotton: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    separator: {
        width: 10,
    },
    image: {
        width: '100%',
        height: 300,
        marginTop: 20,
    },
});

export default ProductScreen;
