import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from './pages/MainPage';
import PhotosPage from './pages/PhotosPage';
import KinsmansPage from "./pages/KinsmansPage";
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/photo',
        component: PhotosPage,
    },
    {
        path: '/kinsman',
        component: KinsmansPage,
    },
];

export default new VueRouter({
    mode: 'history',
    routes
});