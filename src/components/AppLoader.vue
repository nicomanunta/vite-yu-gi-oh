<script>

export default {
    name: "AppLoader",
    data() {
        return {

        }
    },
}
</script>
<template lang="">
    <div class="bg-loader d-flex flex-column ">
        <div class="spinner-border loader" role="status">
            <span class="visually-hidden">Loading</span>
        </div>
        <h1 class="mt-5">Caricamento delle Carte</h1>
    </div>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/generals.scss" as *;

.bg-loader {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $colore-primario;
}

.loader {
    color: $colore-secondario;
    width: 100px;
    height: 100px;
}

h1 {
    color: $colore-secondario;

}
</style>