import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, useWindowDimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { ParamList } from '../routes/Navigation';
import MovieDetails from '../components/MovieDetails';
import useMovieDetails from '../hooks/useMovieDetails';

type PropsNavigation = StackScreenProps<ParamList, 'Detail'>;

const DetailScreen = ({ route, navigation }: PropsNavigation) => {
    const uri = `https://image.tmdb.org/t/p/w500${route.params?.poster_path}`;
    const { height } = useWindowDimensions();
    const { cast, isLoading, movieFull } = useMovieDetails(route.params.id);
    return (
        <ScrollView
            style={styles.container}
        >
            <View
                style={[styles.imageContainer, { height: height * 0.7 }]}
            >
                <View style={styles.imageBorder} >
                    <Image
                        source={{ uri }}
                        style={styles.posterImage}
                    />
                </View>
            </View>
            <View
                style={styles.marginContainer}
            >
                <Text style={styles.subTitle} >{route.params.original_title}</Text>
                <Text style={styles.title} >{route.params.title}</Text>
            </View>
            {
                isLoading ?
                    <ActivityIndicator
                        size="large"
                        color="gray"
                        style={styles.actvity}
                    /> :
                    <MovieDetails movieFull={movieFull!} cast={cast} />
            }
            <TouchableOpacity
                style={styles.backBotton}
                onPress={() => navigation.pop()}
            >
                <Ionicons
                    color="#fff"
                    name="arrow-back-outline"
                    size={60}
                />
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 10,
        borderBottomStartRadius: 12,
        borderBottomEndRadius: 12,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomStartRadius: 12,
        borderBottomEndRadius: 12,
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20,
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    actvity: {
        marginTop: 20,
    },
    backBotton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 5,
    },
});

export default DetailScreen;
