<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: "AppSelect",
    data() {
        return {
            store,
            archetypesList: []
        }
    },
    created() {
        this.getArchetypesList();
    },
    methods: {
        getArchetypesList() {
            axios.get(store.endpointArchetypes).then((response) => {

                this.archetypesList = response.data
            })
        },
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row p-0">
            <div class="col-3 mb-3 p-0">
                <select class="form-select" aria-label="Default select example" v-model="store.search" @change=$emit(filter_cards)> 
                    <option value="">
                        Tutti
                    </option>
                    <option :value="archetype.archetype_name" v-for="archetype, index in archetypesList" :key="index" >
                        {{ archetype.archetype_name }}
                    </option>  
                    
                </select>
            </div>
            

        </div>
    </div>
    
    
</template>
<style lang="scss" scoped>
@use "../styles/generals.scss" as *;
@use "../styles/partials/variables" as *;

select {
    width: 50px;
}
</style>