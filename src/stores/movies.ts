import { ref, computed } from "vue";
import { defineStore } from "pinia";
import Movies from "@/services/Movies";
import type { Movie } from "@/types/Movie";

export const useMovieStore = defineStore("movies", () => {
  // data
  const movies = ref<Movie[]>([]);
  const movieSelected = ref<Movie>();
  const isLoading = ref<boolean>(false);

  // getters
  const trendingMovies = computed(() => movies);
  const tvShows = computed(() =>
    movies.value.filter((m) => m.media_type === "tv")
  );
  const movieTitle = computed(() =>
    movieSelected.value?.title
      ? movieSelected.value.title
      : movieSelected.value?.name
      ? movieSelected.value.name
      : ""
  );

  // actions
  const getMovies = async () => {
    movies.value = await Movies.getTrendingMovies();
  };

  const getMovie = async (id: number, type: string) => {
    movieSelected.value = await Movies.getSingleContent(id, type);
  };

  return {
    movies,
    movieSelected,
    tvShows,
    movieTitle,
    isLoading,
    trendingMovies,
    getMovies,
    getMovie,
  };
});
