import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDBResponse, Movie } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[]
    popular: Movie[]
    topRated: Movie[]
    upComing: Movie[]
}

export default () => {
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upComing: [],
    });
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const nowPlayingPromise = movieDB.get<MovieDBResponse>("/now_playing");
            const popularPromise = movieDB.get<MovieDBResponse>("/popular");
            const topRatedPromise = movieDB.get<MovieDBResponse>("/top_rated");
            const upcomingPromise = movieDB.get<MovieDBResponse>("/upcoming");
            const resp = await Promise.all([
                nowPlayingPromise,
                popularPromise,
                topRatedPromise,
                upcomingPromise,
            ]);
            setMoviesState({
                nowPlaying: resp[0].data.results,
                popular: resp[1].data.results,
                topRated: resp[2].data.results,
                upComing: resp[3].data.results,
            });
            setIsLoading(false);
        })();
    }, []);
    return {
        ...moviesState,
        isLoading,
    };
};
