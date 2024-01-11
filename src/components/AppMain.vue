<script>
import CardList from './CardList.vue';
import AppSelect from './AppSelect.vue';

export default {
    name: "AppMain",
    components: {
        CardList,
        AppSelect
    }
}
</script>
<template lang="">
    
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/generals.scss" as *;


main {
    background-color: $colore-primario;
    padding: 30px 0px;

}
</style>