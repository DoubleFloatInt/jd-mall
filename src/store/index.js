import Vue from 'vue';
import Vuex from 'vuex';
import getters from "@/store/getters";
import user from "@/store/module/user";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user
    },
    getters
});

export default store;