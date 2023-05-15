import Vue from 'vue';
import Vuex from 'vuex';
import photoModule from "./PhotoModule";
import kinsmanModule from "./KinsmanModule";
import dialogModule from "./DialogModule";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        dialogModule,
        photoModule,
        kinsmanModule,
    }
})