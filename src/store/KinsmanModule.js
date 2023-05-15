import axios from "axios";
import {API_URL} from "../main";

export default {
    state: {
        kinsmans: [],
        current: {},
        newPhoto: {},
    },
    mutations: {
        setKinsmans(state, payload) {
            state.kinsmans = payload;
        },
        setCurrentKinsman(state, payload) {
            state.current = payload;
        },
        attachPhoto(state, payload) {
            state.newPhoto = payload;
        },
    },
    getters: {
        getAllKinsmans(state) {
            return state.kinsmans;
        },
        getCurrent: (state) => state.current,
    },
    actions: {
        async fetchKinsmans(context) {
            try {
                const response = await axios.get(API_URL + 'kinsmans');
                context.commit('setKinsmans', response.data.data);
            } catch (e) {
                console.log(e);
            }
        },
        async attachPhoto(context, photo, id) {
            try {
                const data = new FormData();
                data.photo = photo;
                const response = await axios.post(`${API_URL}kinsmans/${id}/photo/add`, data);
                context.commit('attachPhoto', response.data.data);
            } catch (e) {
                console.log(e);
            }
        }
    },
}