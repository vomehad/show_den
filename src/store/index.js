import Vue from 'vue';
import Vuex from 'vuex';
import photoModule from "./photoModule";
import kinsmanModule from "./kinsmanModule";
import dialogModule from "./dialogModule";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        dialogModule,
        photoModule,
        kinsmanModule,
    }
})