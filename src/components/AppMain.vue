
<template>
    <div class="container">
        <h1 class="mt-3">Lista Film</h1>
        <p>Sono stati trovati <span class="fs-3">{{ store.filmsList.length }}</span> films con la tua chiave di ricerca</p>
        <div v-for="film in store.filmsList">

            <h4>Titolo: {{ film.title }}</h4>

            <!-- <h5>Titolo Originale: {{ film.original_title }}</h5> -->

            <h6>Lingua Originale: {{ getFlag(film.original_language) }}</h6>

            <p> Voto {{ film.vote_average}}</p>

        </div>

        <h1 class="mt-3">Lista serie TV</h1>
        <div v-for="tvSeries in store.tvSeriesList">

            <h4>Titolo: {{ tvSeries.name }}</h4>

            <!-- <h5>Titolo Originale: {{ tvSeries.original_title }}</h5> -->

            <h6>Lingua Originale: {{ getFlag(tvSeries.original_language) }}</h6>

            <p> Voto {{ tvSeries.vote_average}}</p>

        </div>


    </div>
  </template>
  
  <script>
  const languageFlags = {
        'it': '🇮🇹',
        'en': '🇬🇧',
        'es': '🇪🇸',
        'fr': '🇫🇷',
    }

  export default {
        data() {
        return {
            store,
            languages: ['it','en', 'es', 'fr'],
        }
    },
    methods: {
    getFlag(language) {

      return languageFlags[language] || 'Non definita';
    },
  },

};

    

  import { store } from '../../js/store';


  
  </script>
  