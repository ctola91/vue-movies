import API from '@/api/api';

const getTrendingMovies = async () => {
    const response = await API.get(`/trending/all/week`);
    return response.data;
}

export default {
    getTrendingMovies
};