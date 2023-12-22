
<template>
    <div class="container main">
        <p>Sono stati trovati <span class="fs-3">{{ store.filmsList.length }}</span> films con la tua chiave di ricerca</p>
        <card class="d-flex flex-wrap">
            <div v-for="film in store.filmsList" class="w-25">

                <img :src="'https://image.tmdb.org/t/p/w342' + film.poster_path" :alt="film.title" class="w-75 mb-3">
                <div class="show">
                    <h4 class="w-75">Titolo: {{ film.title }}</h4>

                    <!-- <h5>Titolo Originale: {{ film.original_title }}</h5> -->

                    <h6>Lingua Originale: {{ getFlag(film.original_language) }}</h6>

                    <p> Voto {{ film.vote_average}}</p>
                </div>
            </div>
        </card>

        <p class="mt-5">Sono state trovate <span class="fs-3">{{ store.tvSeriesList.length }}</span> serie TV con la tua chiave di ricerca</p>
        <card class="d-flex flex-wrap">
            <div v-for="tvSeries in store.tvSeriesList" class="w-25">

                <img :src="'https://image.tmdb.org/t/p/w342' + tvSeries.poster_path" :alt="tvSeries.name" class="w-75">

                <h4 class="w-75">Titolo: {{ tvSeries.name }}</h4>

                <!-- <h5>Titolo Originale: {{ tvSeries.original_title }}</h5> -->

                <h6>Lingua Originale: {{ getFlag(tvSeries.original_language) }}</h6>

                <p> Voto {{ tvSeries.vote_average}}</p>

            </div>
        </card>

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
  

<style>
.show {
    /* display: none; */
  
    top: 30%;
    right:;
}

/* .show:hover {
    display: inline-block;
} */

img {
    position: relative;
}

</style>