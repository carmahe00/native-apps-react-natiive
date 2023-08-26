import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'f050046b0d7693799f51e8d7f69fcbd5',
        language: 'es-ES',
    },
});

export default movieDB;
