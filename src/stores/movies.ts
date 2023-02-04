import { ref, computed } from "vue";
import { defineStore } from "pinia";
import Movies from "@/services/Movies";
import type { Movie } from "@/types/Movie";

export const useMovieStore = defineStore("movies", () => {
  // data
  const all = ref<Movie[]>([]);
  const movies = ref<Movie[]>([]);
  const tvShows = ref<Movie[]>([]);
  const movieSelected = ref<Movie>();

  const movieTitle = computed(() =>
    movieSelected.value?.title
      ? movieSelected.value.title
      : movieSelected.value?.name
      ? movieSelected.value.name
      : ""
  );

  // actions
  const getAll = async () => {
    const { results } = await Movies.getTrendingMovies();
    all.value = results;
  };

  const getTvShows = async () => {
    const { results } = await Movies.getTrendingMovies("tv");
    tvShows.value = results;
  };

  const getMovies = async () => {
    const { results } = await Movies.getTrendingMovies("movie");
    movies.value = results;
  };

  const getMovie = async (id: number, type: string) => {
    const { results } = await Movies.getSingleContent(id, type);
    movieSelected.value = results;
  };

  return {
    all,
    getAll,
    getTvShows,
    movies,
    movieSelected,
    tvShows,
    movieTitle,
    getMovies,
    getMovie,
  };
});
