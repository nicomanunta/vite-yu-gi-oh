<script>
import { store } from "./store.js"
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import AppLoader from './components/AppLoader.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppLoader
  },
  data() {
    return {
      store
    }

  },
  created() {
    axios.get(store.endpoint).then((response) => {
      store.cardList = response.data.data
      store.loading = false
    })

  },
}
</script>
<template lang="">
  <div>
    <AppLoader v-if="store.loading"/>
      
    <div v-else> 
      
      <AppHeader/>
      <AppMain/>
    </div>
  </div>
</template>
<style lang="scss">
@use "./styles/generals.scss" as *;
@use "./styles/partials/variables" as *;
</style>