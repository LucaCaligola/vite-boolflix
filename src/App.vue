<script>
import AppSearch from './components/AppSearch.vue';
import AppMain from './components/AppMain.vue';

export default {
components: {
        AppSearch,
        AppMain,
  }
}
</script>

<template>
  
    <AppSearch/>
    <AppMain/>

</template>

<style lang="scss">
@use './../node_modules/bootstrap/scss/bootstrap.scss'
</style>
