import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, useWindowDimensions } from 'react-native';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LogBox } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import HorizontalSider from '../components/HorizontalSider';
import GradiantBackground from '../components/GradiantBackground';
import { getImageColors } from '../helpers/getColors';
import { GradiantContext } from '../context/GradiantContext';

LogBox.ignoreLogs([
    "exported from 'deprecated-react-native-prop-types'.",
]);


const HomeScreen = () => {
    const { width } = useWindowDimensions();
    const { isLoading, nowPlaying, popular, topRated, upComing } = useMovies();
    const { top } = useSafeAreaInsets();
    const { setMainColors } = useContext(GradiantContext);
    const getPostColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
        const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
        setMainColors({ primary, secondary });
    };
    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPostColors(0);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nowPlaying]);

    if (isLoading)
        return <View style={styles.container} ><ActivityIndicator color="red" size="large" animating={true} /></View>;
    return (
        <GradiantBackground >
            <ScrollView>
                <View style={[styles.movieCarousel, { marginTop: top + 10 }]} >
                    <View
                        style={styles.coruselContainer}
                    >
                        <Carousel
                            layout={"default"}
                            data={nowPlaying}
                            sliderWidth={width}
                            itemWidth={300}
                            renderItem={({ item }) => <MoviePoster item={item} />}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={(index) => getPostColors(index)}
                        />
                    </View>
                    {/* Popular Movies */}
                    <HorizontalSider title="Popular" movies={popular} />
                    <HorizontalSider title="TopRated" movies={topRated} />
                    <HorizontalSider title="Upcoming" movies={upComing} />
                </View>
            </ScrollView>
        </GradiantBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    movieCarousel: {
        flex: 1,
    },
    coruselContainer: {
        height: 440,
    },
});

export default HomeScreen;
