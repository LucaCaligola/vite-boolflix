<template>
    <header>
      <div class="container d-flex justify-content-between align-items-center">
        <span>BOOLFLIX</span>
        <input type="text" placeholder="Cerca un titolo" />
      </div>
    </header>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        filmsList: [],
        apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=0a1a18272fb8d93351b833485b06018e&query=ritorno+al+futuro',
      };
    },
    methods: {
      getFilms() {
        axios.get(this.apiUrl)
          .then((response) => {
            // handle success
            console.log(response.data.results);
          })
          .catch((error) => {
            // handle error
            console.error(error);
          })
          .finally(() => {
            // always executed
          });
      },
    },
    created() {
      this.getFilms();
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
  