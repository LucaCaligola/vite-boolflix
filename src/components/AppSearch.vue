<template>
    <header>
    <div class="container d-flex justify-content-between align-items-center">
        <span>BOOLFLIX</span>
        <div>
            <input type="text" placeholder="Cerca un titolo" v-model="filmSearch" class="m-3"/>
            <button @click="updateFilmSearch">Cerca</button>
        </div>
    </div>
  </header>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        filmsList: [],
        filmSearch: '',
        apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=0a1a18272fb8d93351b833485b06018e&query=ritorno+al+futuro',
      };
    },

    created() {
     
    },
  };
  </script>
  
  <style lang="scss">
  .container {
    height: 80px;
    width: 100%;
  }
  
  header {
    background-color: black;
    color: red;
  }
  </style>
  