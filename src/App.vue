<script>

import AppHeader from './components/AppHeader.vue';
import CardList from './components/CardList.vue';
import AppLoader from './components/AppLoader.vue';
import AppSelect from './components/AppSelect.vue';

import axios from 'axios';
import { store } from "./store.js"
export default {
  components: {
    AppHeader,
    CardList,
    AppLoader,
    AppSelect,
  },
  data() {
    return {
      store
    }

  },
  created() {
    this.getCardList()
  },
  methods: {
    getCardList() {
      let apiUrl = store.endpoint

      if (store.search !== "") {
        apiUrl += `&archetype=${store.search}`
      }

      axios.get(apiUrl).then((response) => {
        store.cardList = response.data.data
        store.loading = false
      })
    },
    filterCardsByArchetype() {
      console.log(store.search)
      this.getCardList();

    }
  },
}
</script>
<template lang="">
  <div>
    <AppLoader v-if="store.loading"/>
      
    <main v-else> 
      <AppHeader/>
      <AppSelect @filter_cards="filterCardsByArchetype"/>
      
      <CardList/> 
    </main>
  </div>
</template>
<style lang="scss">
@use "./styles/generals.scss" as *;
@use "./styles/partials/variables" as *;

main {
  background-color: $colore-primario;
  padding: 30px 0px;

}
</style>