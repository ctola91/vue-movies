import API from '@/api/api';

const imageURL = 'https://image.tmdb.org/t/p/w500';

const getTrendingMovies = async () => {
    const response = await API.get(`/trending/all/week`);
    return response.data;
}

export default {
    getTrendingMovies,
    imageURL
};