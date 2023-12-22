<template>
    <header>
      <div class="container d-flex justify-content-between align-items-center">
          <span>BOOLFLIX</span>
          <div>
              <input type="text" placeholder=" 🔎 Cerca un titolo" v-model="filmSearch" class="m-3" @keyup.enter="store.getFilms(filmSearch)"/>
              <button @click="store.getFilms(filmSearch)">Cerca</button>
          </div>
      </div>
    </header>
  </template>
  
  <script>

  import { store } from '../../js/store';

  
  export default {
    data() {
      return {
        store,
        filmsList: [],
        filmSearch: '',
        tvSeriesList: [],
      };
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

  button, input {
    border: 1px solid white;
    background-color: transparent;
    color: white;
   
  }

  
  </style>
  