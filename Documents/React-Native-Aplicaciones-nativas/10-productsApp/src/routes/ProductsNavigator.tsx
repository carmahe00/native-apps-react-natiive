import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from '../screens/ProductScreen';
import ProductsScreen from '../screens/ProductsScreen';

export type ProductStackParams = {
    ProductsScreen: undefined;
    ProductScreen: { id?: string, name?: string }
}

const Stack = createStackNavigator<ProductStackParams>();

const ProductsNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',
                },
            }}
        >
            <Stack.Screen
                name="ProductsScreen"
                component={ProductsScreen}
                options={{
                    title: 'Products',
                }}
            />
            <Stack.Screen
                name="ProductScreen"
                component={ProductScreen}
            />
        </Stack.Navigator>
    );
};

export default ProductsNavigator;
