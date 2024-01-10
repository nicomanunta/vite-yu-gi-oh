<script>
import CardList from './CardList.vue';

export default {
    name: "AppMain",
    components: {
        CardList
    }
}
</script>
<template lang="">
    <main>
        <CardList/>
    </main>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/generals.scss" as *;


main {
    background-color: $colore-primario;
    padding: 30px 0px;

}
</style>