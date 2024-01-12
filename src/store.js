import { reactive } from "vue";

export const store = reactive({
    cardList: [],
    endpoint: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    endpointArchetypes: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    loading: true,

    search: "",

})