import axios from 'axios';
import React, { FC, useEffect } from 'react';
import { createContext, useState } from 'react';
import { Alert } from 'react-native';
import { ImagePickerResponse } from 'react-native-image-picker';
import caffeApi from '../api/caffeApi';
import { Producto, ProductsResponse } from '../interfaces/appInterfaces';

type ProductsContextProps = {
    products: Producto[],
    loadProducts: () => Promise<void>,
    addProducts: (categoryId: string, productName: string) => Promise<Producto>,
    updateProduct: (categoryId: string, productName: string, productId: string) => Promise<void>,
    deleteProduct: (id: string) => Promise<void>,
    loadProductById: (id: string) => Promise<Producto>,
    uploadImage: (data: ImagePickerResponse, id: string) => Promise<void>, //TODO: cambiar any
}

export const ProductsContext = createContext({} as ProductsContextProps);

const ProductsProvider: FC = ({ children }) => {
    const [products, setProducts] = useState<Producto[]>([]);
    const loadProducts = async () => {
        try {
            const { data } = await caffeApi.get<ProductsResponse>('/productos?limite=50');
            setProducts([...data.productos]);
        } catch (error) {
            console.log(error);
        }

    };
    const addProducts = async (categoryId: string, productName: string): Promise<Producto> => {
        try {
            const { data } = await caffeApi.post<Producto>('/productos', {
                nombre: productName,
                categoria: categoryId,
            });
            setProducts([...products, data]);
            return data;
        } catch (error) {
            console.log(error);
            throw new Error('Error al crear productos');
        }
    };
    const updateProduct = async (categoryId: string, productName: string, productId: string) => {
        try {
            const { data } = await caffeApi.put<Producto>(`/productos/${productId}`, {
                nombre: productName,
                categoria: categoryId,
            });
            setProducts(products.map(prod => {
                return (prod._id === productId)
                    ? data
                    : prod;
            }));
        } catch (error) {
            console.log(error);
        }
    };
    const deleteProduct = async (id: string) => {
        try {
            const { data } = await caffeApi.delete<Producto>(`/productos/${id}`);
            setProducts(products.filter(prod => prod._id !== data._id));
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.response);
            }
        }
    };
    const loadProductById = async (id: string): Promise<Producto> => {
        const { data } = await caffeApi.get<Producto>(`/productos/${id}`);
        return data;
    };
    const uploadImage = async (data: ImagePickerResponse, productId: string) => {
        if (!data.assets) {
            return Alert.alert('No se ha cargado la imagen');
        }
        const fileToUpload = {
            uri: data.assets[0].uri,
            type: data.assets[0].type,
            name: data.assets[0].fileName,
        };

        const formData = new FormData();
        formData.append('archivo', fileToUpload);

        try {
            const resp = await caffeApi.put(
                `/uploads/productos/${productId}`,
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                }
            );

            console.log(resp);
        } catch (error) {
            console.log({ error });
        }
    };
    useEffect(() => {
        loadProducts();
    }, []);
    return (
        <ProductsContext.Provider
            value={{
                products,
                loadProducts,
                addProducts,
                updateProduct,
                deleteProduct,
                loadProductById,
                uploadImage,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;

