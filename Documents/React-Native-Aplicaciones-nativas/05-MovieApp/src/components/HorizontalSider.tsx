import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import MoviePoster from './MoviePoster';

interface Props {
    title?: string
    movies: Movie[]
}

const HorizontalSider = ({ title, movies }: Props) => {
    return (
        <View style={{ height: (title) ? 260 : 220 }} >
            {title && <Text style={styles.popularTitle} >{title}</Text>}
            <FlatList
                data={movies}
                renderItem={({ item }) => <MoviePoster item={item} height={200} width={140} />}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={
                    (() => (
                        <View
                            style={styles.popularMargin}
                        />
                    ))
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    popularTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    popularMargin: {
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
    },
});

export default HorizontalSider;
