<script>
export default {
    name: "AppHeader"
}
</script>
<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12 my-3">
                    <img src="/public/ygo-logo.png" alt="">
                    <h1>Yu-Gi-Oh Api</h1>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/generals.scss" as *;


h1 {
    display: inline;
    vertical-align: middle;
    margin: 0px 20px;

}
</style>