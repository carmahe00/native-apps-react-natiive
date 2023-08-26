import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import currency from 'currency-formatter';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import CastItem from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
    movieFull: MovieFull
    cast: Cast[]
}

const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            <View style={styles.detailContainer} >
                <View style={styles.vote} >
                    <Ionicons
                        name="star-outline"
                        color="grey"
                        size={16}
                    />
                    <Text>{movieFull.vote_average}</Text>
                    <Text style={styles.textGenres} >
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>
                <Text style={styles.titleText} >
                    History
                </Text>
                <Text style={styles.history} >{movieFull.overview}</Text>
                <Text style={styles.titleText} >
                    Budget
                </Text>
                <Text>{currency.format(movieFull.budget, { code: 'USD' })}</Text>
            </View>
            <View style={styles.containerCast} >
                <Text style={{...styles.titleText, marginHorizontal: 20}} >
                    Actors
                </Text>
                <FlatList
                    data={cast}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={CastItem}
                    ItemSeparatorComponent={
                        (() => (
                            <View
                                style={styles.movieMargin}
                            />
                        ))
                    }
                    contentContainerStyle={{height: 80}}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    detailContainer: {
        marginHorizontal: 20,
    },
    vote: {
        flexDirection: 'row',
    },
    textGenres: {
        marginLeft: 5,
        fontWeight: 'bold',
    },
    titleText: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold',
    },
    history: {
        fontSize: 16,
    },
    containerCast: {
        marginTop: 10,
        marginBottom: 80,
    },
    movieMargin: {
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
    },
});

export default MovieDetails;
