<!-- Component che riceve i dati -->
<template>
    <div>
      <h1 class="container">Lista Film</h1>
      <div v-for="film in store.filmsList">

        {{ film.title }}

      </div>
    </div>
  </template>
  
  <script>
  export default {
        data() {
        return {
            store
        }
  }
    
  };

  import { store } from '../../js/store';


  
  </script>
  