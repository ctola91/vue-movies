import API from '@/api/api';

const imageURL = 'https://image.tmdb.org/t/p/w500';

const getTrendingMovies = async (type: string = 'all') => {
    const response = await API.get(`/trending/${type}/week`);
    return response.data;
}

const getSingleContent = async (id: number, type: string) => {
    const response = await API.get(`/${type}/${id}`);
    return response.data;
}

export default {
    getTrendingMovies,
    getSingleContent,
    imageURL
};