import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';
import { ParamList } from '../routes/Navigation';

interface Props {
    item: Movie
    index?: number
    height?: number
    width?: number
}

type PropsNavigation = StackNavigationProp<ParamList, 'Home'>;

const MoviePoster = ({ item, height = 420, width = 300 }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${item?.poster_path}`;
    const navigation = useNavigation<PropsNavigation>();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Detail', item )}
            style={[styles.container, { height, width }]}
            activeOpacity={0.8}
        >
            <View style={styles.imageContainer} >
                <Image source={{ uri }} style={styles.image} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 420,
        width: 300,
    },
    imageContainer: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 10,
        borderRadius: 18,
    },
    image: {
        flex: 1,
        borderRadius: 18,
    },
});

export default MoviePoster;
