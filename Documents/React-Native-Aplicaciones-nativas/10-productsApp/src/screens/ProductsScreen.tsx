/* eslint-disable react-hooks/exhaustive-deps */
import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, RefreshControl } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ProductsContext } from '../context/ProductsContext';
import { ProductStackParams } from '../routes/ProductsNavigator';

type Props = StackScreenProps<ProductStackParams, 'ProductsScreen'>

const ProductsScreen = ({ navigation }: Props) => {
    const { products, loadProducts } = useContext(ProductsContext);
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.bottonRight}
                    onPress={() => navigation.navigate('ProductScreen', {})}
                >
                    <Text>Agregar</Text>
                </TouchableOpacity>
            ),
        });
    }, []);
    const loadPrtoductsFormBackend = async () => {
        setRefreshing(true);
        await loadProducts();
        setRefreshing(false);
    };
    return (
        <View style={styles.container}>

            <FlatList
                data={products}
                keyExtractor={(p, index) => `${p._id}${index}`}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={
                            () => navigation.navigate('ProductScreen', { id: item._id, name: item.nombre })
                        }
                    >
                        <Text style={styles.productName} >{item.nombre}</Text>
                    </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => (
                    <View style={styles.itemSeparator} />
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={loadPrtoductsFormBackend}
                        colors={['red', 'blue', 'green']}
                    />
                }
            />
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productName: {
        fontSize: 20,
    },
    itemSeparator: {
        borderBottomWidth: 2,
        marginVertical: 5,
        borderBottomColor: 'rgba(0,0,0,0.2)',
    },
    bottonRight: {
        marginRight: 20,
    },
});

export default ProductsScreen;
