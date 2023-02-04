import { ref, computed } from "vue";
import { defineStore } from "pinia";
import Movies from "@/services/Movies";
import type { Person } from "@/types/Person";
import type { Movie } from "@/types/Movie";

export const usePeopleStore = defineStore("people", () => {
  // data
  const people = ref<Movie[]>([]);
  const person = ref<Movie>();

  // actions
  const getPeople = async () => {
    const { results } = await Movies.getTrendingMovies("persons");
    people.value = results;
  };

  return {
    people,
    getPeople,
  };
});
