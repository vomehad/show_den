import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from './pages/MainPage';
import PhotosPage from './pages/PhotosPage';
import KinsmansPage from "./pages/KinsmansPage";
import YaTokenPage from "./components/yandex/YaTokenPage";
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
        path: '/ya_token',
        component: YaTokenPage,
    },
];

export default new VueRouter({
    mode: 'history',
    routes
});