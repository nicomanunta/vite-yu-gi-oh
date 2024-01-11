<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppSelect from './components/AppSelect.vue';
import CardList from './components/CardList.vue';
import AppLoader from './components/AppLoader.vue';

import { store } from "./store.js"
export default {
  components: {
    AppHeader,
    AppSelect,
    CardList,
    AppLoader
  },
  data() {
    return {
      store
    }

  },
  created() {
    this.getCardList()
    // axios.get(store.endpoint_archetype).then((response) => {
    //   store.archetypeList = response.data.archetype_name

    // })

  },
  methods: {
    getCardList() {
      axios.get(store.endpoint).then((response) => {
        store.cardList = response.data.data
        store.loading = false
      })
    }
  },
}
</script>
<template lang="">
  <div>
    <AppLoader v-if="store.loading"/>
      
    <div v-else> 
      
      <AppHeader/>
      <AppSelect @perform_search="getCardList"/>
        <CardList/>
    </div>
  </div>
</template>
<style lang="scss">
@use "./styles/generals.scss" as *;
@use "./styles/partials/variables" as *;
</style>