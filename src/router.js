import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from './pages/MainPage';
import PhotosPage from './pages/PhotosPage';
import KinsmansPage from "./pages/KinsmansPage";
import Palette from "./components/Palette";
import Poker from "./components/Poker";
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
    {
        path: '/palette',
        component: Palette,
    },
    {
        path: "/poker",
        component: Poker
    }
];

export default new VueRouter({
    mode: 'history',
    routes
});