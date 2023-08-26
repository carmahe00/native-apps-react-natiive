import { useEffect, useState } from 'react';

import caffeApi from '../api/caffeApi';
import { Categoria, CategoriesResponse } from '../interfaces/appInterfaces';

export const useCategories = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState<Categoria[]>();

    const getCategories = async () => {
        const { data } = await caffeApi.get<CategoriesResponse>('/categorias');
        setCategories(data.categorias);
        setIsLoading(false);
    };

    useEffect(() => {
        getCategories();
    }, []);

    return {
        isLoading,
        categories,
    };
};
