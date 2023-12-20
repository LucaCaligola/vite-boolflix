<template>
    <header>
        <div class="container d-flex justify-content-between align-items-center">
            <span>BOOLFLIX</span>
            <input type="text" placeholder="Cerca un titolo">
        </div>
    </header>
    
</template>
<script>

import axios from 'axios';


export default {

    data() {
        return {
            filmsList : [],
        }
    },
    methods: {
        getFilms(){

            axios.get('https://api.themoviedb.org/3/search/movie?api_key=0a1a18272fb8d93351b833485b06018e&query=ritorno+al+futuro')
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });

        },
        created() {
            this.getFilms();
        },
        
    }
}
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