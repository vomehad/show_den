import axios from "axios";

export default {
    state: {
        photos: [],
        currentPhoto: {},
    },
    mutations: {
        setPhotos(state, payload) {
            state.photos = payload;
        },
        setCurrentPhoto(state, payload) {
            state.currentPhoto = payload;
        },
    },
    getters: {
        getAllPhotos(state) {
            return state.photos;
        },
        getCurrentPhoto: (state) => state.currentPhoto,
    },
    actions: {
        async fetchPhotos(context) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=12');
                context.commit('setPhotos', response.data);
            } catch (e) {
                console.log(e);
            }
        }
    },
}