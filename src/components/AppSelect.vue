<script>
import { store } from '../store';

export default {
    name: "AppSelect",
    data() {
        return {
            store,
            types: [
                "Alien",
                "Infernoble Arms",
                "Noble Knight",
                "Melodious",
                "Archfiend",
                " ",

            ]
        }
    },
}
</script>
<template lang="">
    <div class="container">
        <div class="row p-0 ">
            <div class="col-3 mb-3 p-0 ">
                <select class="form-select" aria-label="Default select example" v-model="store.status">
                    
                    <option value="" v-for="type, index in types" :key="index" :value="type">
                        {{type}}
                    </option>
                    
                </select>
            </div>
            <div class="col-9 ">
                <button type="button" class="btn btn-success me-2 " @click="$emit("perform_search")">Search</button>
                <button type="button" class="btn btn-warning" @click="">Reset</button>
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