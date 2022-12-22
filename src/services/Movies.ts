import API from '@/api/api';

const imageURL = 'https://image.tmdb.org/t/p/w500';

const getTrendingMovies = async (type: string = 'all') => {
    const response = await API.get(`/trending/${type}/week`);
    return response.data;
}

export default {
    getTrendingMovies,
    imageURL
};