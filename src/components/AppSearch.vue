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

        }
        
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