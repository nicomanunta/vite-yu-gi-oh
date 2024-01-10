<script>

import { store } from "../store.js"
export default {
    name: "CardList",
    data() {
        return {
            store
        }
    },

}
</script>
<template lang="">
    <div class="container d-flex justify-content-center bg-container">
        <div class="row misura-riga  ">
            <div class=" colonna-5" v-for="card, index in store.cardList" :key="index">
                <img :src="card.card_images[0].image_url" alt="">
                <h5 id="dimensioni-font">{{card.name}}</h5>
                <h6>{{card.archetype}}</h6>
            </div>
        </div>        
    </div>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/generals.scss" as *;

img {
    width: 100%;
}

.bg-container {
    background-color: $colore-secondario;
}

.misura-riga {
    width: 80%;
}

.colonna-5 {
    width: calc(100% / 5 - 20px);
    background-color: $colore-primario;
    margin: 10px 10px;
    padding: 0px 0px;

}

h5 {
    color: $colore-secondario;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-size: 16px;
    padding: 10px 0px;
}

h6 {
    text-align: center;

}
</style>

